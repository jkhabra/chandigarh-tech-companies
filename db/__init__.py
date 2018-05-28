from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from models import Base, Company, Registration, Employee, Location
import os

def get_session():
    engine = create_engine('sqlite:///db/itIndustry.db')

    if os.path.exists('db/itIndustry.db'):
        Base.metadata.bind = engine
        DBSession = sessionmaker(bind=engine)
        session = DBSession()
        return session
    else:
        Base.metadata.create_all(engine)
        return get_session
 
