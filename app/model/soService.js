var apiurl = 'http://api.stackexchange.com/2.2/'; //TODO: move to config 
//TODO: need 

angular.module('soApp')
.factory('soService', ['$resource',
  function($resource){
    return $resource(
      apiurl + 'search?page=1&pagesize=10&order=desc&sort=activity&intitle=:search&site=stackoverflow'
      , {}, {
      query: {method:'GET', params:{search:'phones'}, isArray:true}
    });
  }])
.factory('questionService', ['$q', '$http',
  ($q, $http) =>
  {
    return {
      get: (id) => {
        var deferred = $q.defer();
        $http(
          {
            url: apiurl + '/questions/' + id + '?order=desc&sort=activity&site=stackoverflow',
            cache: true,
            params : {
              filter: 'withbody'
            }
          }
        ).then((data) => {
            deferred.resolve(data);
        });
        return deferred.promise;
      },
      getAnswers: (id) => {
        var deferred = $q.defer();
        $http(
          {
            url: apiurl + 'questions/' + id + '/answers',
            cache: true,
            params : {
              page:1,
              pagesize:10,
              order:'desc',
              sort:'activity',
              site: 'stackoverflow',
              filter: 'withbody'
            }
          }
        ).then((data) => {
            deferred.resolve(data);
        });
        return deferred.promise;
      }
  }}])
.factory('userService', ['$q', '$http',
  ($q, $http) =>
  {
    return {
      getUser: (id) => { 
        var deferred = $q.defer();
        $http(
          {
            url: apiurl + 'users/' + id + '?order=desc&sort=reputation&site=stackoverflow',
            cache: true,
          }
        ).then((data) => {
            deferred.resolve(data);
        });

        return deferred.promise;
      },
      getTopQuestions: (userId) => {
        var deferred = $q.defer();
        $http(
          {
            url: apiurl + 'users/' + userId + '/questions',
            cache: true,
            params : {
              page:1,
              pagesize:10,
              order:'desc',
              sort:'votes',
              site: 'stackoverflow'
            }
          }
        ).then((data) => {
            deferred.resolve(data);
        });

        return deferred.promise;
      }, 
    }
  }
])
.factory('tagService', ['$q', '$http',
  ($q, $http) =>
  {
    return {
      getFAQ: (id) => { 
        var deferred = $q.defer();
        $http(
          {
            url: apiurl + 'tags/' + id + '/faq?page=1&pagesize=10&site=stackoverflow',
            cache: true,
          }
        ).then((data) => {
            deferred.resolve(data);
        });

        return deferred.promise;
      }
    }
 }])
.factory("pagging", [()=> {
}]) 
  