*** System Specifications ***
Node JS - 10.16.3
Ruby - 2.6.3
NPM - 6.9.0

*** Instructions to set up application ***
- run './bin/setup' ( Will handle needed setup )
- Manually, you can do : 'npm install'
- For ruby, please refer to README.md in functional_spec directory

*** Running application ***
- Go to root directory
- run './bin/parking_lot ./input_files/file_inputs_1.txt'
- Manually you can run using command: 'node ./src/index.js ./input_files/file_inputs_1.txt'

*** Unit testing ***
- Go to root directory
- run './bin/setup'
- run 'npm run test' for JS unit test cases file
- run './bin/run_functional_tests' for already provided functional unit test case

*** Directory Info ***
- ./src : All source code files are stored
- ./src/specs : All unit test case files are stored

*** Exceptions handled in application ***
- Input file not found
- Input file has empty instruction line
- Input file has instruction line with invalid command
- Car registration number is not valid
- Duration is invalid while unparking
- Parking slot is full
- Car registration number is not present while unparking

*** Test case run : ./bin/run_functional_tests ***

[Acids-Macbook:parking_lot_2.0.0 atulanand$ ./bin/run_functional_tests 
cd /Users/atulanand/projects/interviews/parking_lot_2.0.0/bin/../functional_spec; bundle install; bundle exec rake spec:functional
Using rake 10.5.0
Using ffi 1.9.23
Using childprocess 0.9.0
Using contracts 0.16.0
Using builder 3.2.3
Using backports 3.11.3
Using cucumber-tag_expressions 1.1.1
Using gherkin 5.0.0
Using cucumber-core 3.1.0
Using cucumber-expressions 5.0.17
Using cucumber-wire 0.0.1
Using diff-lcs 1.3
Using multi_json 1.13.1
Using multi_test 0.1.2
Using cucumber 3.1.0
Using rspec-support 3.7.1
Using rspec-expectations 3.7.0
Using thor 0.20.0
Using aruba 0.14.5
Using bundler 1.17.3
Using rspec-core 3.7.1
Using rspec-mocks 3.7.0
Using rspec 3.7.0
Bundle complete! 4 Gemfile dependencies, 23 gems now installed.
Use `bundle info [gemname]` to see where a bundled gem is installed.
/Users/atulanand/.rvm/rubies/ruby-2.6.3/bin/ruby -I/Users/atulanand/.rvm/gems/ruby-2.6.3/gems/rspec-core-3.7.1/lib:/Users/atulanand/.rvm/gems/ruby-2.6.3/gems/rspec-support-3.7.1/lib /Users/atulanand/.rvm/gems/ruby-2.6.3/gems/rspec-core-3.7.1/exe/rspec --pattern spec/\*\*\{,/\*/\*\*\}/\*_spec.rb
Run options: include {:type=>"aruba"}

End To End Suite
  has aruba set up
  full scenarios
    input from file

Finished in 0.24396 seconds (files took 0.32048 seconds to load)
2 examples, 0 failures

Acids-Macbook:parking_lot_2.0.0 atulanand$ 

*** Test case run : npm run test ***

[Acids-Macbook:parking_lot_2.0.0 atulanand$ npm run test

> parking_lot_2.0.0@1.0.0 test /Users/atulanand/projects/interviews/parking_lot_2.0.0
> jest --verbose

(node:25187) ExperimentalWarning: The fs.promises API is experimental
 PASS  src/specs/fileOperations.spec.js
  Reading input files and performing operations
    ✓ Reading a valid input file and performing operations (5 ms)
    ✓ Reading an invalid input file with all kind of errors and performing operations (1 ms)

 PASS  src/specs/utils.spec.js
  Check parking slot availablity / occupancy
    ✓ Slot contains car with license plate (3 ms)
    ✓ Slot is available (1 ms)
    ✓ Slots does not have car with license plate
  Validation for car parking
    ✓ When license plate number is not passed (1 ms)
    ✓ When license plate number is not valid
    ✓ When license plate number is valid
  Validation for leaving car parking
    ✓ When duration is negative (1 ms)
    ✓ When duration is not provided
    ✓ When license plate is not provided
    ✓ When license plate number is not valid
    ✓ When license plate number and duration is valid (1 ms)

 PASS  src/specs/operations.spec.js
  Operations invalid / not present
    ✓ Operation command is not present (4 ms)
    ✓ Operation command is invalid (1 ms)
  Create parking slots : 
    ✓ Parking is not created
    ✓ Parking is already created
  Create parking ticket : 
    ✓ Slot is available
    ✓ Slot is unavailable
    ✓ Invalid license plate number (1 ms)
  Leave parking : 
    ✓ Car with license plate number is not present
    ✓ Car with license plate number is present
    ✓ When invalid license is provided (1 ms)
    ✓ When invalid duration is provided
  Get parking status
    ✓ Slots filled

Test Suites: 3 passed, 3 total
Tests:       25 passed, 25 total
Snapshots:   0 total
Time:        2.039 s
Ran all test suites.
Acids-Macbook:parking_lot_2.0.0 atulanand$

