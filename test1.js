let test = [
    { a: 1, b: [2, 3, 4], i: 0, weight: 3 },
    { a: 2, b: [3, 9, 15], i: 1, weight: 6 },// b15
    { a: 3, b: [2, 3, 5], i: 2, weight: 3 }, //b5
    { a: 4, b: [1, 6, 12], i: -1, weight: 2 },//b1
    { a: 5, b: [4], i: -1, weight: 4 },      //b4
    { a: 6, b: [8, 9, 13], i: -1, weight: 5 },//b8
    { a: 8, b: [2], i: -1, weight: 7 },       //b2
    { a: 9, b: [3, 4, 5], i: -1, weight: 15 },//b3
    { a: 10, b: [4, 5, 6], i: -1, weight: 12 },//b6
    { a: 11, b: [5, 6, 11], i: -1, weight: 12 },//b11
    { a: 12, b: [6, 9, 12], i: -1, weight: 11 },//b9
    { a: 13, b: [9, 11, 14], i: -1, weight: 6 },//b14
    { a: 14, b: [11, 13, 14], i: -1, weight: 4 },//b13
    { a: 15, b: [12, 15, 16], i: -1, weight: 5 },//b12
    { a: 16, b: [5, 14, 16], i: -1, weight: 2 },//b16
    { a: 18, b: [2, 8, 18], i: -1, weight: 4 } //b18
  ];
   //[2, 4, 9, 15, 5, 1, 6, 12, 8, 13, 11, 14, 16, 18]
let b = [];
let c=[];
let f=[];
for (let i = 0; i < test.length; i++) {
    let obj ={}
    obj.array=test[i].b;
    obj.weight = test[i].weight;
    b.push(obj); 
  }
for(let m=0;m<test.length;m++){   
   f= f.concat(test[m].b);
}
f=[...new Set(f)]
console.log(f);
let h=[];
for(let i=0; i<f.length;i++){
    let g=[];
    for(let j=0;j<b.length;j++){
       if(b[j].array.includes(f[i])){
           g.push(b[j].weight);
       }
       else{
           g.push(0);
       }
    }
    h.push(g);
}

console.log(h);

var process = function(h){
    console.log(h);
    let q=[];
    for(let i=0;i<h.length;i++){
        q=q.concat(h[i]);
    }
    let max =Math.max(...q);
    // sum+=max;

    // console.log('+'+max,sum);
    let r=[];
    let col;
    for(let i=0;i<h.length;i++){
        for(let j=0;j<h[i].length;j++){
            if(h[i][j]==max){
                col=j;
                r.push(i);
                break;
            }
        }
    }
    console.log(r,col);
    // console.log(col);
    // console.log(r);
    // let sumrow=[];

    // for(let i=0;i<r.length;i++){
    //     sumrow.push(h[r[i]].reduce((a, b) => a + b, 0));
    // }
    // let min = Math.min(...sumrow);
    // for(let i=0;i<sumrow.length;i++){
    //     if(min == sumrow[i])
    //     {
    //         row =i;
    //         break;
    //     }
    // };
    // row=r[row];

    // t=[...h];
    // t.splice(row,1);
    // //console.log(t);

    // u = JSON.parse(JSON.stringify(t));

    // //u = [...t];
    // for(let i=0;i<u.length;i++){
    //     u[i].splice(col,1);  
    // }
//    if(u.length>1 && u[0].length>1){
//        process(u);
//    }
    
}


let rowArray =[{ rows:[1],col:7,sum:15},{rows:[2],col:7, sum:15},{ rows:[5],col:7, sum:15}]

let run = function(rowArray){
    let newArray = JSON.parse(JSON.stringify(rowArray));
    for(let m=0;m<rowArray.length;m++){

        u = JSON.parse(JSON.stringify(h));
        u.splice(rowArray[m].rows[0],1);
        for(let i=0;i<u.length;i++){
            u[i].splice(rowArray[m].col,1);  
        }
        console.log(u);
        let q=[];
        for(let i=0;i<u.length;i++){
            q=q.concat(u[i]);
        }
        let max =Math.max(...q);
        let r=[];
        let col;
        for(let i=0;i<u.length;i++){
            for(let j=0;j<u[i].length;j++){
                if(u[i][j]==max){
                    col=j;
                    r.push(i);
                    break;
                }
            }
        }
        console.log(r);
        let arraysum = newArray[0].sum;
      for(let i=0,option;i<r.length;i++){
        let arrayrow =JSON.parse(JSON.stringify(newArray[0].rows));
         option = {};
        arrayrow.push(r[i]);
        option.rows=arrayrow
        option.col =col;
        option.sum =  arraysum+ max;
         console.log(option);
        
        newArray.push(option)
      }
      newArray.splice(0,1);
    }
    
  console.log(newArray);
  
   // console.log(r,col);
}
run(rowArray);
//[2, 3, 4, 9, 15, 5, 1, 6, 12, 8, 13, 11, 14, 16, 18]
// u1=standard(h,1,7)//b3 //[2, 4, 9, 15, 5, 1, 6, 12, 8, 13, 11, 14, 16, 18]
// console.log(u1);
// u2 = standard(u1,6,7);//b6 //[2, 4, 9, 15, 5, 1, 12, 8, 13, 11, 14, 16, 18]
// console.log(u2);
// u3 = standard(u2,9,7);//b11 //[2, 4, 9, 15, 5, 1, 12, 8, 13, 14, 16, 18]
// console.log(u3);
// u4 = standard(u3,2,7);//b9 //[2, 4,15, 5, 1, 12, 8, 13, 14, 16, 18]
// console.log(u4);
// u5 = standard(u4,0,6);//b2 //[ 4,15, 5, 1, 12, 8, 13, 14, 16, 18]
// console.log(u5);
// u6 = standard(u5,1,1);//b15 //[ 4, 5, 1, 12, 8, 13, 14, 16, 18]
// console.log(u6);
// u7 = standard(u6,6,5);//b14 //[ 4, 5, 1, 12, 8, 13, 16, 18]
// console.log(u7);
// u8 = standard(u7,4,4);//b8 //[ 4, 5, 1, 12,13, 16, 18]
// console.log(u8); 
// u9 = standard(u8,3,5);//b12 //[ 4, 5, 1,13, 16, 18]
// console.log(u9); 
// u10 = standard(u9,0,3);//b4 //[ 5, 1,13, 16, 18]
// console.log(u10); 
// u11 = standard(u10,2,3);//b13 //[ 5, 1, 16, 18]
// console.log(u11); 
// u12 = standard(u11,3,4);//b18 //[ 5, 1, 16]
// console.log(u12); 
// u13 = standard(u12,3,4);//b18 //[ 5, 1, 16]
// console.log(u13); 