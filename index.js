

// distanceFromHqInBlocks
                            function distanceFromHqInBlocks(pk){
                                const hq = 42;
                                let dist = Math.abs(pk-hq);
                            
                                    return dist;
                            }
                            console.log(distanceFromHqInBlocks(34));

// // //distanceFromHqInFeet

                        function distanceFromHqInFeet(pk2){

                            const hq = 42
                            const ft = 264
                            let disblocks = Math.abs(pk2-hq);
                            let disfeets = disblocks * ft;
                            return disfeets
                            

}
// distanceTravelledInFeet

                                // function distanceFromHqInFeet(pk2){
                                // function distanceFromHqInBlocks(pk){
                                //     const hq = 42;
                                //     let dist = Math.abs(pk-hq);
                                //     return dist
                                    
                                // }
                                //     return dist * 264;
                                // }
                                // console.log(distanceFromHqInFeet(43)); 


                            function distanceTravelledInFeet(start, destination){
                                let answr = Math.abs((destination - start) * 264);
                                return answr     
                            }
                            console.log(distanceTravelledInFeet(43, 48));

            


// calculatesFarePrice(start, destination)

function calculatesFarePrice(start, destination){
    
    let dist = Math.abs((destination - start) * 264);
    
    if (dist <= 400){
        return 0;
    }else if(dist > 400 && dist < 2000){
       let fare = (dist - 400) * 0.02
        return fare
    }else if(dist > 2000 && dist <= 2500){
        let fare = 25
        return 25
    }else if (dist > 2500){
         let fare = "cannot travel that far"
        return fare
    }
    
    

}

    
console.log(calculatesFarePrice(50, 32));






