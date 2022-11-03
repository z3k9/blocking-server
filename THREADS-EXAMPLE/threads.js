const { isMainThread, workerData , Worker }=require('worker_threads');

if(isMainThread){
    console.log(`Main Thread! Process ID: ${process.pid}`);
    new Worker(__filename, {
        workerData: [12,2,3,45,56,]
    });
    new Worker(__filename, {
        workerData: [34,89, 56,34]
    });
}else{
    console.log(`${workerData} sorted is ${workerData.sort}`);
}
