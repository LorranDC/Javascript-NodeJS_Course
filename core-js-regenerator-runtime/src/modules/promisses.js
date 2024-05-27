function promise() {
    return new Promise((resolve, reject) =>{
        setTimeout(() =>{
            console.log('Hey, i am the promise.');
            resolve();
        }, 2000);
    });
}

export default async function () {
    await promise();
    console.log('Finished');
}