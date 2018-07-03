from sqlalchemy import Column, ForeignKey, Integer, String, Boolean, DATETIME, create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import relationship
import datetime

Base = declarative_base()

class Company(Base):
    __tablename__ = 'company'
    id = Column(Integer, primary_key=True)
    name = Column(String(150), nullable=False)
    logo = Column(String(500))
    website = Column(String(150), nullable=False)
    established = Column(String(150))
    type = Column(String(100), nullable=False)
    detail = Column(String(1000), default="Not")
    create_at = Column(DATETIME, default=datetime.datetime.utcnow)
    update_at = Column(DATETIME, default=datetime.datetime.utcnow)


class Location(Base):
    __tablename__ = 'location'
    id = Column(Integer, primary_key=True)
    address = Column(String(500), nullable=False)
    coordinates = Column(Integer)
    company_id = Column(Integer, ForeignKey('company.id'))
    company = relationship(Company)
    create_at = Column(DATETIME, default=datetime.datetime.utcnow)
    update_at = Column(DATETIME, default=datetime.datetime.utcnow)

class Registration(Base):
    __tablename__ = 'registration'
    id = Column(Integer, primary_key=True)
    ref_no = Column(Integer)
    company_id = Column(Integer, ForeignKey('company.id'))
    company = relationship(Company)
    registered_name = Column(String(300), nullable=False)
    state = Column(String(100))
    incorporation_date = Column(String(100))
    create_at = Column(DATETIME, default=datetime.datetime.utcnow)
    update_at = Column(DATETIME, default=datetime.datetime.utcnow)

class Employee(Base):
    __tablename__ = 'employee'
    id = Column(Integer, primary_key=True)
    name = Column(String(200), nullable=False)
    status = Column(String(100))
    salary = Column(Integer)
    role = Column(String(150))
    possible_roles = Column(String(100), nullable=False)
    rating = Column(Integer)
    create_at = Column(DATETIME, default=datetime.datetime.utcnow)
    update_at = Column(DATETIME, default=datetime.datetime.utcnow)
