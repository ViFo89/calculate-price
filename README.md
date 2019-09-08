# Price calculator

The process I used was to first write unittests towards the old code and then start the refactoring. This allows me to see that the code works as it did before the refactoring.

I have split the calculation in to two parts: `handleProductCalculation` and `handleUserCalculation`. I found that the calculation for Product- and User-type was not dependent on eachother so it seemed like an obvius way to divide the code.

I am not a big fan of overusing exceptions and to me this is not a clear case if it should be used or not. If I had more time I would probably have changed it to some sort of result-type to handle invalid states.

I added "enums" as well, to me it was not clear when the numbers was used for `productType` and `userType` so to make it more readable I made this change.

In my opinion it is not a good practice to have a direct dependency to non-deterministic modules and that's why I created `initPriceCalculator`. This allowed me to both extract `Date` and to inject it instead, and hide functions that the caller should not need to care about. This also makes it easier to test different kinds of scenarios where you want to change todays date (even though I have not done that in my tests).

In regards to extending this code in the future I think this solution is sufficient. It is (in my opinion) easy to see where the calculations are done for the user-types and product-types. I have extreacted the rebate-dates to be injected, so that it can be changed without the need to change the logic in the calculator. Something that might easly change in the future would be the actual numbers, so to make that a bit more descriptive and easy to spot that could be constants instead.