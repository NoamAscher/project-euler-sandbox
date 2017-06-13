# A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

# Find the largest palindrome made from the product of two 3-digit numbers.



# 24 minutes

# ran in under a second

def largestPalProd3():
  c = 999

  while c > 0:
    x = c
    y = c
    while y <= 999:
      if str(x*y) == str(x*y)[::-1]:
        currMaxPal = x*y
        x1 = min([x, y])
        y1 = max([x, y])
        while x1 < 1000:
          y1 = max([x, y])
          while y1 < 999:
            y1 += 1
            if str(x1*y1) == str(x1*y1)[::-1] and str(x1*y1) > currMaxPal:
              currMaxPal = str(x1*y1)
          x1 += 1
        print(x, y)
        return currMaxPal
      x -= 1
      y += 1
    c -= 1