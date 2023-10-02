import random

import factory
from faker import Faker
from user.models import User

faker = Faker()


class UserFactory(factory.django.DjangoModelFactory):
    class Meta:
        model = User

    username = factory.LazyAttribute(lambda _: faker.unique.email())
    name = factory.LazyAttribute(lambda _: faker.name())
    email = factory.LazyAttribute(lambda _: faker.unique.email())
    max_products = factory.LazyAttribute(lambda _: random.randint(1, 100))
