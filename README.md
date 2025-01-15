# Incorrect GCD Calculation in Recursive Function

This repository demonstrates a common error in recursive functions, specifically in calculating the greatest common divisor (GCD) using Euclid's algorithm.

The `bug.js` file contains the buggy implementation. The `bugSolution.js` file provides a corrected version.

The issue lies in the base case of the recursion where `a` and `b` are not properly compared and can result in incorrect results for specific inputs.

## Bug

The original function fails to correctly identify the GCD in cases where the Euclidean algorithm isn't terminated properly due to improper handling of the base case.  This results in incorrect GCD calculations, particularly for certain input pairs.