const name = ["Guadalupe", "Ollie", "Aki"];

function writeCards (name, event) {
    let messageEnd = []
    for (let i = 0; i < name.length; i++) 
{
    let message = `Thank you, ${name[i]}, for the wonderful ${event} gift!`
    messageEnd.push(message)
}
    return messageEnd
}

function countDown(number) {
    while (number >= 0) {
        console.log(number)
        number --;
    }
}