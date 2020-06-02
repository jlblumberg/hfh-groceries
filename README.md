# Hack For Heroes Hackathon (1 - 3 June 2020) - Team Groceries 🛒

[Objective](#objective) | [Collaborators](#collaborators) | [Planning](#planning) | [User Stories](#user_stories) | [Running the program](#running_the_program) | [Testing](#testing) | [Further work](#further_work) 

## <a name="objectives">Objectives</a>

Create an app which provides frontline workers and at-risk individuals with the open times devoted purely to them at their
nearest supermarket.

## <a name="collaborators">Collaborators</a>

- Srikaanth Balajhi
- Sophia Bell
- Josh Blumberg
- Ilias Grigoropoulos
- Haydon Houghton
- Kehinde Peter Olofinmoyin
- Jason Wong
- Emily Wright

## <a name="planning">Planning</a>

- [Miro MVP board:](https://miro.com/app/board/o9J_kr0yDm4=/)
- [Invision wireframes:](https://jason842465.invisionapp.com/freehand/hfh-groceries-K7tpa9Jf9?v=vjZVtVETrCEbCjPjKYYovg%3D%3D&linkshare=urlcopied)

## <a name="user_stories">User stories</a>

```
As an NHS/key worker/vulnerable person,
so that I can find the best time to shop
I want to see when my local supermarket's special hours are
```
```
As an NHS/key worker/vulnerable person,
so that I can find the closest place to shop
I want to see where my local supermarkets are (based on postcode) on a map
```
```
As a developer
So that I can show off my project
I want to deploy my project on a publicly accessible site
```

## <a name="running_the_program">Running the program</a>

### Setup
```
$ git clone https://github.com/jlblumberg/hfh-groceries.git
$ cd hfh-groceries
$ bundle install
$ yarn install
$ bundle exec figaro install
```
You will then have to add a MAPS_API_KEY to the config/application.yml file with a valid Google API key.

## <a name="testing">Testing, code coverage, and code style</a>
```
$ rspec 
$ rubocop # TBC
```

## <a name="further_work">Further work</a>