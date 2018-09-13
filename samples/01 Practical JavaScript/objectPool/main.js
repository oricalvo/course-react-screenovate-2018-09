function test() {
    try {
        var pool = createPool();

        var ori = {
            id: 1,
            name: "Ori"
        };

        pool.add(ori);
        pool.add(ori);
        pool.add(ori);
        pool.add(ori);
        pool.add(ori);

        var likeOri = {
            id: 1,
            name: "Ori"
        };

        pool.add(likeOri);

        if (pool.size() != 2) {
            throw new Error("Unexpected pool size");
        }

        console.log("PASS");
    }
    catch(err) {
        console.log("FAILED");
    }
}

test();
