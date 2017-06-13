// Obviously, it has to be at least 3 digits long because there need to be at least 5 permutations…

// 100^3 = 1 million
// 215^3 = largest shy of 10 million
// 216^3 = smallest resulting in 8 digits
// 464^3 = largest shy of 9 digits.

// SO:

// For each power of 10 p starting at 1:
//   While i^3 < p:
//     build up permutation arrays.
//     If a permutation array ever exceeds 5 return the minimum of that array.

def smallestFivePermutations():
  i = 1
  p = 1
  while (i**3) < 1000000000000:
    permutationlist = []
    while i**3 < 10**p:
      #print(i, i**3, minArrange(i**3))
      if len(permutationlist) == 0:
        permutationlist.append([minArrange(i**3), i**3])
      else:
        j_in_list = False
        for j in permutationlist:
          if minArrange(i**3) == j[0]:
            j.append(i**3)
            j_in_list = True
            if len(j) > 5:
              print(j[1], j[1]**(1/3))
              print(j[2], j[2]**(1/3))
              print(j[3], j[3]**(1/3))
              print(j[4], j[4]**(1/3))
              print(j[5], j[5]**(1/3))
              return min(j[1:6])
            print(j)
        if j_in_list == False:
          permutationlist.append([minArrange(i**3), i**3])
      # print(permutationlist)
      i += 1
    p += 1

def minArrange(n):
  s = str(n)
  r = ''.join(sorted(s))[::-1]
  return int(r)