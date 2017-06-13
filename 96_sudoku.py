# Algortithm

# for each grid:

#   run the linetester at line 1

#   linetester:
#     for line x:
#       figure our which numbers have not been entered yet.
#       for each permutation of those numbers:
#         temporarily replace line x with those
#         perform a uniqueness check for all 27 9-sets (fuck it, all 27.)
#         if it passes all of them:
#           if this is the 9th line: return the updated grid and true.
#           else: retrieve linetester(x+1, currentGrid)
#             if linetester(x+1, currentGrid) is true:
#               update the grid as per linetester(x+1, currentGrid)
#               return the updated grid and true
#             else unmark this line
#         else nothing for now (loop again)
#       if you end up here, return false

#   sum += the top-left 3-numberstring

# return sum

import math
import itertools

gridUnf = ["003020600",
          "900305001",
          "001806400",
          "008102900",
          "700000008",
          "006708200",
          "002609500",
          "800203009",
          "005010300"]

grid = gridUnf
for x in range(0,9):
  grid[x] = list(gridUnf[x])
  for y in range (0,9):
    grid[x][y] = int(grid[x][y])

def permute(set):
  def permGen(xs, low=0):
      if low + 1 >= len(xs):
          yield xs
      else:
          for p in permGen(xs, low + 1):
              yield p
          for i in range(low + 1, len(xs)):
              xs[low], xs[i] = xs[i], xs[low]
              for p in permGen(xs, low + 1):
                  yield p
              xs[low], xs[i] = xs[i], xs[low]
  #l = [-1] * math.factorial(len(set))
  #x = 0
  #for p in permGen(set):
      l[x] = p
      x = x + 1
  return iter(permGen(set))

def permute(list):
    for p in permGen(list):
        x = iter(p)
    return x

permutation = [list(permGen(p)) for p in [1,2,3,4]]
print(permutation)


def baseFromTen(x, b):
  """
  Converts given number x, from base 10 to base b
  x -- the number in base 10
  b -- base to convert
  """
  assert(x >= 0)
  assert(1< b < 37)
  r = ''
  import string
  while x > 0:
    r = string.printable[x % b] + r
    x //= b
  return r

def noConflict(grid):
  for a in range(0, 8):
    for b in range (a+1, 9):
      for i in range (0, 9):
        # verticals and horizontals
        if grid[i][a] == grid[i][b] or grid[a][i] == grid[b][i]:
          return False

  # use base 3 :)
  for c in range(0, 8):
    for d in range (c+1, 9):
      for i in range (0, 3):
        for j in range (0, 3):
          x1 = int(list(baseFromTen(c, 3))[0])
          y1 = int(list(baseFromTen(c, 3))[1])
          x2 = int(list(baseFromTen(d, 3))[0])
          y2 = int(list(baseFromTen(d, 3))[1])
          if grid[x1+i][y1+j] == grid[x2+i][y2+j]:
            return False




def lineTester(grid, line):
  innerOriginalGrid = grid
  # figure our which numbers have not been entered yet.
  nineCheck = [0,0,0,0,0,0,0,0,0]
  for x in range(0,9):
    if grid[line][x] != 0:
      nineCheck[grid[line][x]-1] = 1
  notEnteredYet = []
  for y in range(0,9):
    if nineCheck[y] == 0:
      notEnteredYet.append(y)
  print(notEnteredYet)
  # collect all the permutations of those numbers
  notEntYetPerms = permute(notEnteredYet)
  print(notEntYetPerms)
  # for each permutation:
  for perm in range(0,len(notEntYetPerms)):
    z = 0
    for a in range(0, 9):
      if grid[line][a] == 0:
        grid[line][a] = perm[z]
        z = z + 1
    # perform a uniqueness check for all 27 9-sets
    if noConflict(grid):
      # if this is the 9th line: return the updated grid and true.
      if line == 8:
        return [grid, True]
      # else: if linetester(x+1, currentGrid) is true:
      else:
        nextLineTest = lineTester(grid, line+1)
        if nextLineTest[1]:
          # update the grid as per linetester(x+1, currentGrid), return that and true.
          return [nextLineTest[0], True]
    else:
      grid = innerOriginalGrid
  return [grid, False]



def solver(grid):
  originalGrid = grid
  linesTested = 0
  for line in range(0,9):
    testLine = subSolver(grid, line)
    if testLine == [0,0,0,0,0,0,0,0,0]:
      grid = originalGrid
      linesTested
    else:
      grid[line] = testLine
      linesTested++

# :(

