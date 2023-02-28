function ex1(){
    console.log("Hello, World!");
    console.log("Hello, World!");
    console.log("Hello, World!");
};

function ex2(n){
  if (n>0){
    console.log("%d is positive",n);
  }
  else if (n==0) {
    console.log("%d is zero",n);

  }
  else {
    console.log("%d is negative", n);
  }


};

function ex3(n1,n2){
  if (n1>n2) {
    console.log("The greatest among %d and %d is %d",n1,n2,n1);
  }
  else if (n1==n2) {
    console.log("%d and %d are equal", n1,n2);
  }
  else {
    console.log("The greatest among %d and %d is %d", n1,n2,n2);
  }
};


ex1();
ex2(-10);
ex3(80,90);
