var friends = {
    bill: {
        firstName: "Bill",
        lastName: "Moreno",
        number: "347",
        address: ['343 fairmount avenue','jersey city', 'nj','07306']
        },
    steve :{
        firstName: "Steve",
        lastName: "Jobs",
        number: "(408) 555-5555",
        address:[ "1 Infinite Loop",
         "Cupertino", "CA 95014"]
        }    
    };
    
    var list = function (obj) {
        for (var hold in obj)  {
            console.log(hold);
            };
        };
    
    var search = function(name) {
        for (var prop in friends) {
            if (friends[prop].firstName === name) {
                console.log(friends[prop]);
                return friends[prop];
                }
            }
        } ;   
        
     list(friends);
     search ("Steve");
    