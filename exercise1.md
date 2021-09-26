CI setup for a hypothetical Java application

Linting:

Almost any IDE supporting Java gives out code formatting related warnings
and errors in case of uncompilable code. Specific rules for code formatting guidelines
(tab vs space indentation etc) can be saved as a configuration file on e.g. Eclipse
and shared among all developers working on the same codebase, so that code styling
stays consistent.

Testing:

JUnit is the most common tool for writing unit and acceptance tests and there are
also many tools extending on that for automated test reports and e.g. screen shots
of the time when GUI test fails.

Building:

Common dependency handling tools are e.g. Maven/Gradle/Ant that can be hooked up
to a CI server like Jenkins that can first run the automated tests and then
create a production build, meaning in practice a .jar file that is to be wrapped
and run somehow

Alternative CI tools:

Bamboo by Atlassian (creators of JIRA)
Teamcity by JetBrains
Gitlab

Self-hosted or cloud-based:

Advantages for self-hosted could be e.g. better possibilities for customisation.
On the other hand, self-hosted most likely means more work in terms of maintenance
and setting up vs letting a cloud-based system handle all that. Neither option
likely is better but depends on e.g. which of the above points are more important
for the specific project.