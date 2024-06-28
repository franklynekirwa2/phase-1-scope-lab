var customerName= 'bob';

function upperCaseCustomerName() {

 customerName=customerName.toUpperCase();

}
function  setBestCustomer(){
    bestCustomer ='not bob';
}

function overwriteBestCustomer(){
       bestCustomer='maybe bob';
}

 const LeastFavoriteCustomer="frank";
 function changeLeastFavoriteCustomer(){
            LeastFavoriteCustomer = 'kirwa';
         }
         try{
            changeLeastFavoriteCustomer();
           }
          catch (error) {
            console.error("Error:", message);
        }



