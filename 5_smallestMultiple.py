# 50 minutes
# takes less than a second.


def TwentyDiv():
  product = 2
  for x in range (3, 21):
    tempProd = product
    for y in factorArray(x):
      if tempProd % y == 0:
        tempProd = tempProd / y
      else:
        product = product * y
  return product


def factorArray(n):
  returnList = []
  for x in range(2,n):
    if n % x == 0:
      returnList.append(x)
      returnList.extend(factorArray(int(n/x)))
      print(returnList)
      return returnList
  return [n]