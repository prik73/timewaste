import type { Question } from '../types'

export const ANALYTICS_QUESTIONS: Question[] = [
  {
    "q": "Data analytics is best defined as:",
    "o": [
      "Visualization of data using graphs",
      "Scientific process of transforming data into insights for decision-making",
      "Collection of large volumes of data",
      "Storage of structured and unstructured data"
    ],
    "a": "Scientific process of transforming data into insights for decision-making"
  },
  {
    "q": "Which of the following represents the correct order of data analytics types based on workflow?",
    "o": [
      "Descriptive → Predictive → Diagnostic → Prescriptive",
      "Predictive → Descriptive → Prescriptive → Diagnostic",
      "Descriptive → Diagnostic → Predictive → Prescriptive",
      "Diagnostic → Descriptive → Prescriptive → Predictive"
    ],
    "a": "Descriptive → Diagnostic → Predictive → Prescriptive"
  },
  {
    "q": "Under which level of measurement does the variable “height of a person” fall?",
    "o": ["Interval", "Ratio", "Nominal", "Ordinal"],
    "a": "Ratio"
  },
  {
    "q": "In Python (Pandas), which command is used to select rows by integer position?",
    "o": ["df.loc[]", "df.index[]", "df.iloc[]", "df.select()"],
    "a": "df.iloc[]"
  },
  {
    "q": "Which of the following is NOT a benefit of using Jupyter Notebook?",
    "o": [
      "Easy documentation",
      "User-friendly interface",
      "Web-based code editing",
      "Faster hardware execution"
    ],
    "a": "Faster hardware execution"
  },
  {
    "q": "The arithmetic mean is NOT appropriate for which type of data?",
    "o": ["Ratio", "Nominal", "Ordinal", "Interval"],
    "a": "Nominal"
  },
  {
    "q": "If a distribution is positively skewed, which relationship holds true?",
    "o": [
      "Median < Mean < Mode",
      "Mean = Median = Mode",
      "Mode < Median < Mean",
      "Mean < Median < Mode"
    ],
    "a": "Mode < Median < Mean"
  },
  {
    "q": "Which measure is used to compare relative dispersion between two datasets?",
    "o": [
      "Variance",
      "Range",
      "Standard deviation",
      "Coefficient of variation"
    ],
    "a": "Coefficient of variation"
  },
  {
    "q": "A dataset has a mean of 50 and a standard deviation of 10. According to the Empirical Rule, approximately what percentage of observations lie between 30 and 70?",
    "o": ["68%", "99.7%", "95%", "75%"],
    "a": "95%"
  },
  {
    "q": "Consider the following Python code:\n\"x = [10, 20, 30]\n y = x\n y.append(40)\n print(len(x))\"\n\n What will be the output?",
    "o": ["1", "Error", "4", "3"],
    "a": "4"
  },
  {
    "q": "Which distribution is most appropriate for rare events occurring over a fixed interval?",
    "o": ["Uniform", "Normal", "Poisson", "Binomial"],
    "a": "Poisson"
  },
  {
    "q": "A fair coin is tossed twice. What is the probability of getting exactly one head?",
    "o": ["0.75", "1.0", "0.5", "0.25"],
    "a": "0.5"
  },
  {
    "q": "Which distribution is commonly used to model the time between events in a Poisson process?",
    "o": [
      "Exponential distribution",
      "Chi-square distribution",
      "Uniform distribution",
      "Binomial distribution"
    ],
    "a": "Exponential distribution"
  },
  {
    "q": "Which of the following is a discrete probability distribution?",
    "o": [
      "Gamma distribution",
      "Normal distribution",
      "Poisson distribution",
      "Exponential distribution"
    ],
    "a": "Poisson distribution"
  },
  {
    "q": "If a binomial distribution has n = 10 and p = 0.4, what is the mean?",
    "o": ["6.0", "4.0", "2.0", "10.0"],
    "a": "4.0"
  },
  {
    "q": "In a hypergeometric distribution, sampling is done:",
    "o": [
      "From infinite population",
      "With replacement",
      "Without replacement",
      "With constant probability"
    ],
    "a": "Without replacement"
  },
  {
    "q": "What will be the output of the following code:\n\"from scipy.stats import poisson\n print (poisson.var(4))\"",
    "o": ["2.0", "16.0", "8.0", "4.0"],
    "a": "4.0"
  },
  {
    "q": "The mean and variance of a Poisson distribution are:",
    "o": ["λ and √λ", "μ and μ²", "λ and λ", "√λ and λ"],
    "a": "λ and λ"
  },
  {
    "q": "Consider the following Python code:\n\"from scipy.stats import norm\nprint(norm.pdf(0))\"\n\nWhat will be the output?",
    "o": ["1.0", "0.0", "0.399", "0.25"],
    "a": "0.399"
  },
  {
    "q": "Consider the following Python code:\n\"import scipy.stats as stats\nprint(round(stats.norm.cdf(0),2))\"\n\nWhat will be the output?",
    "o": ["0.25", "0.0", "1.0", "0.5"],
    "a": "0.5"
  },
  {
    "q": "Let a population have mean μ = 50 and variance σ² = 100. For samples of size n = 25, the variance of the sampling distribution of the mean is:",
    "o": ["100.0", "25.0", "4.0", "20.0"],
    "a": "4.0"
  },
  {
    "q": "Which statement about Central Limit Theorem is FALSE?",
    "o": [
      "Approximation improves as n increases",
      "Sampling distribution tends to normality",
      "It applies to the sample mean",
      "It requires normal population"
    ],
    "a": "It requires normal population"
  },
  {
    "q": "If P = 0.6 and n = 150, what is the standard deviation of the sampling distribution of p ̂?",
    "o": ["0.06", "0.08", "0.04", "0.05"],
    "a": "0.04"
  },
  {
    "q": "A sample of size 36 has mean 80 and population standard deviation 12. The margin of error for a 95% CI is:",
    "o": ["2.0", "3.92", "6.0", "4.0"],
    "a": "3.92"
  },
  {
    "q": "Which estimator is unbiased?",
    "o": [
      "Sample range",
      "Sample median",
      "Sample variance",
      "Sample standard deviation"
    ],
    "a": "Sample variance"
  },
  {
    "q": "The width of a confidence interval for the population mean will decrease when:",
    "o": [
      "Population variance increases",
      "Confidence level increases",
      "Sample size increases",
      "Sample mean increases"
    ],
    "a": "Sample size increases"
  },
  {
    "q": "A 95% CI for a mean is (46.5, 51.5). Which statement is correct?:",
    "o": [
      "95% of sample means lie in this interval",
      "The population mean has a 95% probability of lying in the interval",
      "The CI is constructed so that 95% of such intervals contain μ",
      "The confidence level equals the sample mean"
    ],
    "a": "The CI is constructed so that 95% of such intervals contain μ"
  },
  {
    "q": "When σ² is unknown and sample size is small, the appropriate distribution for CI estimation of μ is:",
    "o": ["Z distribution", "F distribution", "Chi-square distribution", "t distribution"],
    "a": "t distribution"
  },
  {
    "q": "A variable is normally distributed with: Mean (μ) = 50 Standard deviation (σ) = 10 What is the Z-score for a value of 65?",
    "o": ["2.5", "1.5", "1.0", "2.0"],
    "a": "1.5"
  },
  {
    "q": "A sample of size 16 is drawn from a normal population. The chi-square statistic for variance estimation has degrees of freedom equal to:",
    "o": ["16.0", "14.0", "30.0", "15.0"],
    "a": "15.0"
  },
  {
    "q": "Given: x̄ = 32, μ₀ = 30, σ = 10, n = 30, α = 0.05\nTest: H₀: μ ≤ 30 vs H₁: μ > 30\nThe calculated z-value is closest to:",
    "o": ["1.64", "0.87", "2.05", "1.09"],
    "a": "1.09"
  },
  {
    "q": "For a one-tailed test at α = 0.05, if p-value = 0.137, the correct decision is:",
    "o": ["Accept H₀", "Reject H₀", "Insufficient data", "Do not reject H₀"],
    "a": "Do not reject H₀"
  },
  {
    "q": "Rejecting a true null hypothesis is called:",
    "o": [
      "Sampling error",
      "Power of the test",
      "Type I error",
      "Type II error"
    ],
    "a": "Type I error"
  },
  {
    "q": "If the sample size is fixed and α is decreased, then β will:",
    "o": ["Become zero", "Increase", "Decrease", "Remain unchanged"],
    "a": "Increase"
  },
  {
    "q": "A sample of 120 accidents shows 67 due to drunk driving.\nTest H₀: p = 0.5 vs H₁: p ≠ 0.5\nThe test statistic z is closest to:",
    "o": ["1.15", "1.64", "0.98", "1.28"],
    "a": "1.28"
  },
  {
    "q": "If in a z test, the p-value = 0.2006 and α = 0.05, the decision is:",
    "o": ["Increase sample size", "Reject H₀", "Not enough evidences", "Do not reject H₀"],
    "a": "Do not reject H₀"
  },
  {
    "q": "If σ₁² and σ₂² are known, the appropriate test statistic for μ₁ − μ₂ is:",
    "o": ["χ² statistic", "z statistic", "F statistic", "t statistic"],
    "a": "z statistic"
  },
  {
    "q": "Which hypothesis must always contain equality?",
    "o": [
      "Research hypothesis",
      "Working hypothesis",
      "Null hypothesis",
      "Alternative hypothesis"
    ],
    "a": "Null hypothesis"
  },
  {
    "q": "Which action reduces both Type I and Type II errors simultaneously?",
    "o": [
      "Increasing sample size",
      "Increasing α",
      "Changing tail of test",
      "Decreasing α"
    ],
    "a": "Increasing sample size"
  },
  {
    "q": "In the past, 60% of the tourists who visited Delhi went to see Agra City. The management of Agra City recently undertook an extensive promotional campaign. They are interested in determining whether the promotional campaign actually increased the proportion of tourists visiting Agra City. The correct set of hypotheses is",
    "o": [
      "H₀: P ≥ 0.45 Ha: P < 0.45",
      "H₀: P ≤ 0.60 Ha: P > 0.60",
      "H₀: P < 0.45 Ha: P ≥ 0.45",
      "H₀: P > 0.60 Ha: P ≤ 0.60"
    ],
    "a": "H₀: P ≤ 0.60 Ha: P > 0.60"
  },
  {
    "q": "In testing H₀: μ = 20 vs H₁: μ > 20 with α = 0.05, the rejection region for a Z test is:",
    "o": ["Z < −1.96", "|Z| > 1.96", "Z > 1.645", "Z < −1.645"],
    "a": "Z > 1.645"
  },
  {
    "q": "Given values\n\n\n\nDegrees of freedom (approx.) is closest to:",
    "o": ["24.0", "18.0", "22.0", "20.0"],
    "a": "22.0"
  },
  {
    "q": "Given that the sample size (n) = 36, sample mean = 34.6, population standard deviation (σ) = 12\nHo: µ ≤ 30,  Ha: µ > 30\n If the test is done at 95% confidence, the null hypothesis should _________",
    "o": ["None of these", "be rejected", "Not enough information", "not be rejected"],
    "a": "be rejected"
  },
  {
    "q": "Which test is appropriate? σ unknown, n = 45, normal population",
    "o": [
      "Z-test using σ (Population Standard Deviation)",
      "t-test",
      "F-test",
      "Z-test using s (Sample Standard Deviation)"
    ],
    "a": "Z-test using s (Sample Standard Deviation)"
  },
  {
    "q": "ANOVA is preferred over multiple t-tests because it:",
    "o": [
      "Works only for large samples",
      "Eliminates assumptions",
      "Controls family-wise Type I error",
      "Reduces Type II error"
    ],
    "a": "Controls family-wise Type I error"
  },
  {
    "q": "In context of ANOVA, if treatment means are far apart relative to within-group variability, F value will be:",
    "o": ["Close to 0", "Negative", "Close to 1", "Large"],
    "a": "Large"
  },
  {
    "q": "If Tukey’s HSD critical difference = 3.5, then two means of 18 and 14:",
    "o": [
      "Require larger sample",
      "Not significantly different",
      "Significantly different",
      "Need LSD test"
    ],
    "a": "Significantly different"
  },
  {
    "q": "The partial ANOVA table is given below:\nSource\n\nSS\n\ndf\n\nTreatments\n\n240\n\n?\n\nError\n\n120\n\n12\n\nTotal\n\n360\n\n?\n\nThe number of treatments = 4\n\nFind the Mean Square Due to Treatments:",
    "o": ["60.0", "120.0", "80.0", "240.0"],
    "a": "80.0"
  },
  {
    "q": "For the give table in question no 8, the total degrees of freedom is:",
    "o": ["360.0", "16.0", "15.0", "12.0"],
    "a": "15.0"
  },
  {
    "q": "For the data in question 8, The calculated F-statistic is:",
    "o": ["6.0", "4.0", "12.0", "8.0"],
    "a": "8.0"
  },
  {
    "q": "In a two-way ANOVA,\nif SSA = 180,\nSSB = 120,\nSSAB = 60,\nthen SSE equals:",
    "o": ["420.0", "360.0", "300.0", "Cannot be determined"],
    "a": "Cannot be determined"
  },
  {
    "q": "Which of the following designs is the only design capable of detecting interaction effects?",
    "o": [
      "Paired t-test",
      "Factorial design",
      "Randomized block design",
      "One-way ANOVA"
    ],
    "a": "Factorial design"
  },
  {
    "q": "In Randomized Block Design (RBD), each treatment appears:",
    "o": [
      "Only in selected blocks",
      "Once in each block",
      "Randomly multiple times",
      "In only one block"
    ],
    "a": "Once in each block"
  },
  {
    "q": "In a Regression:\nSSR (Sum Square Regression) = 200\nNumber of Independent variable =5\nSSE (Sum Square Error) = 60\nTotal no of observation =16\nWhat is the F-statistic?",
    "o": ["3.33", "6.67", "5.56", "4.25"],
    "a": "6.67"
  },
  {
    "q": "Least squares method minimizes:",
    "o": ["∑(y²)", "∑| residuals |", "∑(residuals²)", "∑(residuals)"],
    "a": "∑(residuals²)"
  },
  {
    "q": "A general linear model can include transformed predictors (z₁, z₂, …). These represent:",
    "o": [
      "Only polynomial terms",
      "Dummy variables only",
      "Any function of original predictors",
      "Only interaction terms"
    ],
    "a": "Any function of original predictors"
  },
  {
    "q": "In Randomized Block Design (RBD) the purpose of blocking is to:",
    "o": [
      "Increase within-group variation",
      "Increase Type II error",
      "Increase error variance",
      "Remove nuisance variation"
    ],
    "a": "Remove nuisance variation"
  },
  {
    "q": "In simple linear regression, the coefficient b(slope) represents:",
    "o": [
      "Total variation in data",
      "Average value of Y",
      "Change in X for a one-unit change in Y",
      "Change in Y for a one-unit change in X"
    ],
    "a": "Change in Y for a one-unit change in X"
  },
  {
    "q": "What is the purpose of this following command?\ntbl = pd.read_excel(\"C:/Users/Somi/Documents/regr.xlsx\")",
    "o": [
      "To export regression results to Excel",
      "To convert a DataFrame into a NumPy array",
      "To read an Excel dataset into a pandas DataFrame",
      "To create a new Excel file"
    ],
    "a": "To read an Excel dataset into a pandas DataFrame"
  },
  {
    "q": "If the 95% confidence interval for β1 does not include 0, then:",
    "o": [
      "Model is incorrect",
      "Residuals are normal",
      "Intercept is zero",
      "Slope is statistically significant"
    ],
    "a": "Slope is statistically significant"
  },
  {
    "q": "When regression assumptions about the error term are violated, which of the following may occur?",
    "o": [
      "Sample size automatically reduces",
      "Coefficient of determination becomes zero",
      "Regression line disappears",
      "Hypothesis testing results become unreliable"
    ],
    "a": "Hypothesis testing results become unreliable"
  },
  {
    "q": "Residual analysis is primarily used to:",
    "o": [
      "Maximize R²",
      "Estimate regression coefficients",
      "Validate regression model assumptions",
      "Test multicollinearity"
    ],
    "a": "Validate regression model assumptions"
  },
  {
    "q": "If the variance of residuals increases as the value of the independent variable increases, this indicates:",
    "o": ["Multicollinearity", "Autocorrelation", "Heteroscedasticity", "Normality"],
    "a": "Heteroscedasticity"
  },
  {
    "q": "A residual plot showing a clear curved pattern suggests:",
    "o": [
      "Errors are normally distributed",
      "The model fits perfectly",
      "A linear model may be inappropriate",
      "Constant variance exists"
    ],
    "a": "A linear model may be inappropriate"
  },
  {
    "q": "Standardized residuals are primarily used to:",
    "o": [
      "Transform dependent variables",
      "Reduce bias in coefficients",
      "Increase R²",
      "Detect outliers"
    ],
    "a": "Detect outliers"
  },
  {
    "q": "If residuals exhibit non-constant variance, the immediate consequence is:",
    "o": [
      "Perfect multicollinearity",
      "Biased regression coefficients",
      "Incorrect sign of slope",
      "Invalid hypothesis tests and confidence intervals"
    ],
    "a": "Invalid hypothesis tests and confidence intervals"
  },
  {
    "q": "In a multiple linear regression model, multicollinearity primarily affects:",
    "o": [
      "The magnitude of the dependent variable",
      "The unbiasedness of regression coefficients",
      "The stability and standard errors of coefficient estimates",
      "The calculation of residuals"
    ],
    "a": "The stability and standard errors of coefficient estimates"
  },
  {
    "q": "In multiple regression, the adjusted R² is preferred over R² because it:",
    "o": [
      "Always increases when a new variable is added",
      "Eliminates multicollinearity",
      "Guarantees better prediction accuracy",
      "Penalizes the inclusion of irrelevant independent variables"
    ],
    "a": "Penalizes the inclusion of irrelevant independent variables"
  },
  {
    "q": "In a multiple regression model with k independent variables, the overall F-test is used to test whether:",
    "o": [
      "Residuals are normally distributed",
      "All regression coefficients are individually significant",
      "At least one independent variable is statistically significant",
      "The intercept is equal to zero"
    ],
    "a": "At least one independent variable is statistically significant"
  },
  {
    "q": "In a regression model with a dummy variable representing gender (Male = 1, Female = 0), the coefficient of the dummy variable represents:",
    "o": [
      "The average value of the dependent variable for males",
      "The variance of the dependent variable",
      "The slope of the continuous independent variable",
      "The difference in mean dependent variable between males and females"
    ],
    "a": "The difference in mean dependent variable between males and females"
  },
  {
    "q": "In regression modeling, the key difference between the dependent variable in linear regression and logistic regression is that",
    "o": [
      "Both require normally distributed dependent variables",
      "Both require binary dependent variables",
      "Logistic regression requires continuous dependent variable",
      "Linear regression requires continuous dependent variable while logistic regression requires binary dependent variable"
    ],
    "a": "Linear regression requires continuous dependent variable while logistic regression requires binary dependent variable"
  },
  {
    "q": "Which measure is primarily used to assess model fit in logistic regression instead of the sum of squared errors used in linear regression?",
    "o": ["Mean squared error", "Adjusted R²", "Mean absolute error", "−2 Log Likelihood"],
    "a": "−2 Log Likelihood"
  },
  {
    "q": "Which statistical test is used to evaluate the overall significance of the logistic regression model?",
    "o": ["t test", "Z test", "G test", "F test"],
    "a": "G test"
  },
  {
    "q": "The coefficients in logistic regression are interpreted primarily using",
    "o": [
      "correlation coefficients",
      "standardized beta coefficients",
      "variance inflation factors",
      "odds ratios"
    ],
    "a": "odds ratios"
  },
  {
    "q": "In logistic regression, the odds ratio for an independent variable measures",
    "o": [
      "change in probability for one-unit increase",
      "change in mean response",
      "goodness of fit of the model",
      "change in odds for one-unit increase in predictor"
    ],
    "a": "change in odds for one-unit increase in predictor"
  },
  {
    "q": "If the odds of an event occurring are 3, the corresponding probability is",
    "o": ["0.6", "0.5", "0.8", "0.75"],
    "a": "0.75"
  },
  {
    "q": "In logistic regression model evaluation, the difference between the −2 log likelihood of the base model and the proposed model follows approximately which distribution?",
    "o": ["F distribution", "normal distribution", "t distribution", "chi-square distribution"],
    "a": "chi-square distribution"
  },
  {
    "q": "The Wald test statistic used in logistic regression for testing significance of coefficients is",
    "o": ["Z²", "β/SE", "β²/SE²", "β×SE"],
    "a": "β²/SE²"
  },
  {
    "q": "In logistic regression, the relationship between predictors and probability is modeled using",
    "o": [
      "linear probability function",
      "quadratic function",
      "logistic (sigmoid) function",
      "exponential function"
    ],
    "a": "logistic (sigmoid) function"
  },
  {
    "q": "If the estimated probability of an event is P =0.40, the corresponding odds are",
    "o": ["0.4", "2.5", "1.5", "0.67"],
    "a": "0.67"
  },
  {
    "q": "In a binary classification confusion matrix, which component represents records where the model predicts class “1” but the actual class is “0”?",
    "o": ["True Positive", "False Negative", "False Positive", "True Negative"],
    "a": "False Positive"
  },
  {
    "q": "Which of the following correctly defines classification accuracy?",
    "o": ["(FP + FN)/Total", "TP/(TP + FN)", "(TP + TN)/Total", "(TP + FP)/Total"],
    "a": "(TP + TN)/Total"
  },
  {
    "q": "Which metric measures the proportion of actual positives correctly identified?",
    "o": ["Precision", "Accuracy", "Specificity", "Recall (Sensitivity)"],
    "a": "Recall (Sensitivity)"
  },
  {
    "q": "Reducing the cutoff value from 0.50 to 0.30 will generally:",
    "o": [
      "Increase false negatives",
      "Decrease sensitivity",
      "Increase specificity",
      "Increase predicted positives"
    ],
    "a": "Increase predicted positives"
  },
  {
    "q": "In an ROC curve, the x-axis represents:",
    "o": ["Accuracy", "Precision", "False Positive Rate", "Sensitivity"],
    "a": "False Positive Rate"
  },
  {
    "q": "Which value of AUC (Area Under Curve) represents a perfect classifier?",
    "o": ["0.5", "0.75", "0.0", "1.0"],
    "a": "1.0"
  },
  {
    "q": "Which of the following metrics is most useful when false negatives are very costly (e.g., disease detection)?",
    "o": ["Accuracy", "Specificity", "Misclassification rate", "Sensitivity"],
    "a": "Sensitivity"
  },
  {
    "q": "The first-order regression model with one predictor variable is represented as (Considering the standard nomenclature):",
    "o": ["y = β₀ + β₁x + ε", "y = β₀ + ε", "y = β₀ + β₁x² + ε", "y = β₀ + β₁x + β₂x² + ε"],
    "a": "y = β₀ + β₁x + ε"
  },
  {
    "q": "In a second-order regression model with one predictor variable, which additional term is included (x is independent variable)?",
    "o": ["x²", "x", "xy", "β₀"],
    "a": "x²"
  },
  {
    "q": "In regression analysis, an interaction term between two variables x₁ and x₂ is represented as:",
    "o": ["x₁ + x₂", "x₁x₂", "x₁/x₂", "x₁ − x₂"],
    "a": "x₁x₂"
  },
  {
    "q": "A researcher wants to test whether region (Categorical Variable)and investment type (Categorical variable) are related. Which test is most appropriate?",
    "o": ["Z-test", "ANOVA", "Chi-square test of independence", "t-test"],
    "a": "Chi-square test of independence"
  },
  {
    "q": "Degrees of freedom in a contingency table with 4 rows and 3 columns:",
    "o": ["12.0", "7.0", "5.0", "6.0"],
    "a": "6.0"
  },
  {
    "q": "A Chi-square test shows significance, but several expected frequencies are below 5. What is the most appropriate action?",
    "o": [
      "Use regression",
      "Increase significance level",
      "Ignore the issue",
      "Combine categories"
    ],
    "a": "Combine categories"
  },
  {
    "q": "In a contingency table, if row and column variables are independent, then:",
    "o": [
      "Observed < Expected",
      "Cannot be compared",
      "Observed = Expected",
      "Observed > Expected"
    ],
    "a": "Observed = Expected"
  },
  {
    "q": "Which situation violates Chi-square assumptions?",
    "o": [
      "Large sample size",
      "Categorical data",
      "Independent observations",
      "Expected frequency < 5"
    ],
    "a": "Expected frequency < 5"
  },
  {
    "q": "Cluster analysis may give misleading results when:",
    "o": [
      "Sample size is large",
      "Variables are correlated",
      "Data is standardized",
      "Variables are on different scales"
    ],
    "a": "Variables are on different scales"
  },
  {
    "q": "Which method is most sensitive to outliers in clustering?",
    "o": [
      "Regression",
      "Hierarchical clustering",
      "Chi-square test",
      "K-means clustering"
    ],
    "a": "K-means clustering"
  },
  {
    "q": "A marketer uses clustering to segment customers but finds unstable clusters. The most likely issue is:",
    "o": [
      "High significance level",
      "Too many observations",
      "Low degrees of freedom",
      "Poor variable selection"
    ],
    "a": "Poor variable selection"
  },
  {
    "q": "Which situation best suits cluster analysis?",
    "o": [
      "Testing independence",
      "Estimating mean",
      "Predicting sales",
      "Grouping customers based on behavior"
    ],
    "a": "Grouping customers based on behavior"
  },
  {
    "q": "Standardization transforms data so that:",
    "o": ["Variance = 0", "Values increase", "Mean = 1", "Mean = 0 and deviation = 1"],
    "a": "Mean = 0 and deviation = 1"
  },
  {
    "q": "In cluster analysis, dissimilarity between two objects is:",
    "o": [
      "Always zero",
      "Equal to correlation",
      "Always negative",
      "Non-negative and increases with difference"
    ],
    "a": "Non-negative and increases with difference"
  },
  {
    "q": "If all values of a variable are missing, what should be done?",
    "o": ["Ignore missing values", "Replace with mean", "Normalize", "Remove variable"],
    "a": "Remove variable"
  },
  {
    "q": "Categorical variable dissimilarity is based on:",
    "o": ["Mean difference", "Correlation", "Ratio of mismatches", "Variance"],
    "a": "Ratio of mismatches"
  },
  {
    "q": "If two objects match perfectly in a categorical variable, dissimilarity is:",
    "o": ["Undefined", "−1", "1.0", "0.0"],
    "a": "0.0"
  },
  {
    "q": "Why are ordinal variables standardized to [0,1]?",
    "o": [
      "Increase variance",
      "Reduce sample size",
      "Improve correlation",
      "Different variable scales need normalization"
    ],
    "a": "Different variable scales need normalization"
  },
  {
    "q": "If max = 3.08 and min = 1.34, normalization denominator is:",
    "o": ["2.08", "3.08", "1.74", "1.0"],
    "a": "1.74"
  },
  {
    "q": "The objective function in K-means minimizes:",
    "o": [
      "Variance between clusters",
      "Correlation",
      "Between-cluster distance",
      "Sum of squared distances within clusters"
    ],
    "a": "Sum of squared distances within clusters"
  },
  {
    "q": "Two objects are described by 4 categorical variables. They match in 3 variables and differ in 1 variable. What is the dissimilarity?",
    "o": ["1.0", "0.75", "0.5", "0.25"],
    "a": "0.25"
  },
  {
    "q": "Given log-transformed values: Object 1 = 2.65, Object 2 = 1.34 Maximum = 3.08, Minimum = 1.34 Find the normalized dissimilarity between objects 1 and 2:",
    "o": ["0.5", "0.25", "1.0", "0.75"],
    "a": "0.75"
  },
  {
    "q": "Consider two centroids: C1 = (1,1), C2 = (5,5) A point P = (2,3). Which cluster will P belong to (using Euclidean distance)?",
    "o": ["Both equally", "Cluster 2", "Cannot determine", "Cluster 1"],
    "a": "Cluster 1"
  },
  {
    "q": "In decision tree algorithm, attribute selection method is used to:",
    "o": [
      "Clean data",
      "Remove outliers",
      "Normalize features",
      "Choose best splitting attribute"
    ],
    "a": "Choose best splitting attribute"
  },
  {
    "q": "CART follows which approach while building trees?",
    "o": ["Random search", "Backtracking", "Top-down greedy", "Bottom-up greedy"],
    "a": "Top-down greedy"
  },
  {
    "q": "The Gini index is mainly used for:",
    "o": ["Regression only", "Sampling", "Classification", "Clustering"],
    "a": "Classification"
  },
  {
    "q": "Information gain is biased towards:",
    "o": [
      "Attributes with fewer values",
      "Binary attributes only",
      "Continuous attributes only",
      "Attributes with many values"
    ],
    "a": "Attributes with many values"
  },
  {
    "q": "Gain ratio is used to:",
    "o": [
      "Increase bias",
      "Normalize dataset",
      "Remove bias of information gain",
      "Reduce dataset size"
    ],
    "a": "Remove bias of information gain"
  },
  {
    "q": "Which of the following ensures binary splits in decision trees?",
    "o": ["Entropy", "Information gain", "Gini index", "Gain ratio"],
    "a": "Gini index"
  },
  {
    "q": "In hierarchical clustering, HAC stands for:",
    "o": [
      "Hierarchical Analytical Clustering",
      "Hybrid Agglomerative Clustering",
      "High Accuracy Clustering",
      "Hierarchical Agglomerative Clustering"
    ],
    "a": "Hierarchical Agglomerative Clustering"
  },
  {
    "q": "The Euclidean distance formula is used to:",
    "o": ["Measure similarity", "Reduce dimensions", "Measure dissimilarity", "Normalize data"],
    "a": "Measure dissimilarity"
  },
  {
    "q": "LabelEncoder in Python is used for:",
    "o": [
      "Feature selection",
      "Scaling data",
      "Data splitting",
      "Encoding categorical variables"
    ],
    "a": "Encoding categorical variables"
  },
  {
    "q": "The function fit_transform() in encoding:",
    "o": [
      "Only transforms data",
      "Deletes missing values",
      "Fits and transforms data",
      "Only fits model"
    ],
    "a": "Fits and transforms data"
  }
]
