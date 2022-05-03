#duck typing
#만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면
#나는 그 새를 오리라고 부를 것이다.

class Duck:
   def sound(self):
      print u"꽥꽥"

class Dog:
   def sound(self):
      print u"멍멍"

def get_sound(animal):
   animal.sound()

def main():
   bird = Duck()
   dog = Dog()
   get_sound(bird)
   get_sound(dog)