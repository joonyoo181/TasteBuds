from models import *

class Group(db.Document):
    link = db.StringField(required=True)
    owner = db.ReferenceField('User', required=True)
    members = db.ListField(db.ReferenceField('User'))
    selected_tags = db.ListField(db.StringField())
    liked_foods = db.ListField(db.ReferenceField('Food'))
