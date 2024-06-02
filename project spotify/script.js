console.log("hello bsdk")


async function main() {
    const a= await fetch(`http://127.0.0.1:5500/songs/`);
    let response = await a.text();
    console.log(response)
}

main()