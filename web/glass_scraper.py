from bs4 import BeautifulSoup
from requests import get
import random
from db import get_session
from models import Company

user_agents = [
    'Googlebot/2.1 (+http://www.google.com/bot.html)',
    'Mozilla/5.0 (iPad; U; CPU OS 3_2_1 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Mobile/7B405',
    'Mozilla/5.0 (Windows; U; Windows NT 5.1; de; rv:1.9.2.3) Gecko/20100401 Firefox/3.6.3 (FM Scene 4.6.1) ',
    'AltaVista Intranet V2.0 AVS EVAL search@freeit.com',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_4) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/56.0.2924.87 Safari/537.36'
]



def make_soup(url):
    """
    Takes a url, and return BeautifulSoup for that Url
    """
    header = {
        'user-agent': random.choice(user_agents)
    }

    print("Downloading page: ", url)
    g = BeautifulSoup(get(url, headers=header).content, 'html.parser')
    return g

def parse(soup):
    mata_data = soup.findAll('div',{'class':'empInfo'})
    link =  soup.find('li',{'class':'next'})
    for company in mata_data:
        name = company.find('div',{'class':'margBotXs'}).text
        website = company.find('span',{'class':'subtle'})
        web = ''
        if website != None:
            web = website.text
        logo = company.find('span',{'class':'sqLogo'})
        logo_url = None

        try:
            logo_url = logo.find('img')['src']
        except Exception as error:
            pass

        try:
            db_session = get_session()
            if not db_session.query(Company).filter(Company.name == name).all():
                    new_company = Company(name=name, logo=logo_url, website=web)

                    db_session.add(new_company)
                    db_session.commit()
        except Exception as error:
            print('error in database', error)

    try:
        next_link = 'https://www.glassdoor.co.in' + link.find('a')['href']
        company_data(next_link)
    except Exception as error:
        print("next page's link not found", error)

def company_data(link):
    soup = make_soup(link)
    parse(soup)
