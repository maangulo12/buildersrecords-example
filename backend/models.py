#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
    backend.models
    ~~~~~~~~~~~~~~

    This module implements the database models of this application.

    For more information on how to create models:
        - Flask-SQLAlchemy : http://flask-sqlalchemy.pocoo.org/2.1/
        - SQLAlchemy       : http://www.sqlalchemy.org/

    For more information on how to hash passwords:
        - Flask-Bcrypt : https://flask-bcrypt.readthedocs.io/en/latest/
"""

from backend import db, bcrypt


class User(db.Model):
    """A model of a user"""
    __tablename__ = 'users'

    id       = db.Column(db.Integer, primary_key=True)
    email    = db.Column(db.String(50), nullable=False, unique=True)
    username = db.Column(db.String(30), nullable=False, unique=True)
    password = db.Column(db.String, nullable=False)

    def __init__(self, email, username, password):
        self.email    = email
        self.username = username
        self.password = bcrypt.generate_password_hash(password)
    
    def check_password(self, password):
        return bcrypt.check_password_hash(self.password, password)


class Project(db.Model):
    """A model of a project"""
    __tablename__ = 'projects'

    id           = db.Column(db.Integer, primary_key=True)
    name         = db.Column(db.String(50), nullable=False)
    address      = db.Column(db.String(80), nullable=False)
    city         = db.Column(db.String(30), nullable=False)
    state        = db.Column(db.String(2), nullable=False)
    zipcode      = db.Column(db.String(10), nullable=False)
    home_sq      = db.Column(db.Integer, nullable=False)
    project_type = db.Column(db.String(15), nullable=False)
    user_id      = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)

    items          = db.relationship('Item', backref='projects')
    categories     = db.relationship('Category', backref='projects')
    funds          = db.relationship('Fund', backref='projects')
    expenditures   = db.relationship('Expenditure', backref='projects')
    subcontractors = db.relationship('Subcontractor', backref='projects')


class Category(db.Model):
    """A model of a category"""
    __tablename__ = 'categories'

    id         = db.Column(db.Integer, primary_key=True)
    name       = db.Column(db.String(50), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    items        = db.relationship('Item', backref='categories')
    expenditures = db.relationship('Expenditure', backref='categories')


class Item(db.Model):
    """A model of an item."""
    __tablename__ = 'items'

    id          = db.Column(db.Integer, primary_key=True)
    name        = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(80))
    estimated   = db.Column(db.Numeric(12,2))
    actual      = db.Column(db.Numeric(12,2))
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    project_id  = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    expenditures = db.relationship('Expenditure', backref='items')


class Fund(db.Model):
    """A model of a fund"""
    __tablename__ = 'funds'

    id         = db.Column(db.Integer, primary_key=True)
    name       = db.Column(db.String(50), nullable=False)
    loan       = db.Column(db.Boolean, nullable=False)
    amount     = db.Column(db.Numeric(12,2), nullable=False)
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)

    expenditures = db.relationship('Expenditure', backref='funds')
    draws        = db.relationship('Draw', backref='funds')


class Draw(db.Model):
    """A model of a draw"""
    __tablename__ = 'draws'

    id      = db.Column(db.Integer, primary_key=True)
    date    = db.Column(db.Date, nullable=False)
    amount  = db.Column(db.Numeric(12,2), nullable=False)
    fund_id = db.Column(db.Integer, db.ForeignKey('funds.id'), nullable=False)


class Expenditure(db.Model):
    """A model of an expenditure"""
    __tablename__ = 'expenditures'

    id          = db.Column(db.Integer, primary_key=True)
    date        = db.Column(db.Date, nullable=False)
    company     = db.Column(db.String(50), nullable=False)
    cost        = db.Column(db.Numeric(12,2), nullable=False)
    fund_id     = db.Column(db.Integer, db.ForeignKey('funds.id'), nullable=False)
    category_id = db.Column(db.Integer, db.ForeignKey('categories.id'), nullable=False)
    item_id     = db.Column(db.Integer, db.ForeignKey('items.id'), nullable=False)
    project_id  = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)


class Subcontractor(db.Model):
    """A model of a subcontractor"""
    __tablename__ = 'subcontractors'

    id         = db.Column(db.Integer, primary_key=True)
    company    = db.Column(db.String(50), nullable=False)
    person     = db.Column(db.String(50))
    number     = db.Column(db.String(15))
    project_id = db.Column(db.Integer, db.ForeignKey('projects.id'), nullable=False)