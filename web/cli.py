from flask_script import Manager
from .import app
import os
from .glass_scraper import company_data

cli = Manager(app)


@cli.command
def web():
    """Run the web server"""
    print('running server...........')
    port = int(os.environ.get('PORT', 5000))

    debug = False if os.environ.get('FLASK_PROD') else True
    app.run(host='0.0.0.0', debug=debug, port=port)

@cli.command
def scraper():
    """Run the scraper"""
    company_data('https://www.glassdoor.co.in/Reviews/chandigarh-it-reviews-SRCH_IL.0,10_IC2879615_KE11,13.htm')
