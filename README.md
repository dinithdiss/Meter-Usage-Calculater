# Meter-usage-calculater
Good for calculate your electricity | water usage 

# Meter Reading Backend.

You can use this nodejs backend for any meter reading project.
examples : Electricity Bill Usage calculation, Water bill calculation, ...

- Calculate your daily usage.
- Assume user utility bill.
- You can manage your monthly usage.

## Features
- Add meter reading details.
- Get meter reading count using account numbers.
- Get all distinct account numbers (get distinct account numbers one by one).
- Get meter reading history.
- Get last reading date of any account number.
- Get daily average usage using latest reading.

## Technology

- Nodejs - Backend
- Postgresql - Database

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

## Installation

Install the dependencies and devDependencies.
```sh
npm install
```
Start the server.
```sh
node index.js
```

## Dependencies

- express
- body-parser
- cors
- pg

## Port
```sh
localhost:8080
```


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>

