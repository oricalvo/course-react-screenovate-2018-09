function Tag() {
}

function test() {
    try {
        var pool = ObjectPool();
        var pool2 = ObjectPool();

        var ori = {
            id: 1,
            name: "Ori"
        };

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

        window.tag = new Tag();
        window.tag.pool = pool;
        window.tag.pool2 = pool2;
    }
    catch(err) {
        console.log("FAILED: " + err.message);
    }
}

test();
