function y1(){
    var var1 = 20;
    function z1(){
        console.log(var1)
        function q(){
            console.log(var1,var2)
        }
        q()
    }
    var1=200;
    z1()
    var var2=100;
}
y1()
