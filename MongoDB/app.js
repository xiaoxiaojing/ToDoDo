var MongoClient = require('mongodb').MongoClient
var assert = require('assert')

var url = 'mongodb://localhost:27017/MongoDB'
var insertDocuments = function(db, callback){
    var collection = db.collection('documents')
    collection.insertMany([
        {a:1}, {a:2}, {a:3}
    ], function(err, result){
        assert.equal(err, null)
        assert.equal(3, result.result.n)
        assert.equal(3, result.ops.length)
        console.log("Inserted 3 documents into the collection");
        callback(result)
    })
}

var findDocuments = function(db, callback){
    var collection = db.collection('documents')
    collection.find({}).toArray(function(err, docs){
        assert.equal(err, null)
        console.log("Found the following records");
        console.log(docs);
        callback(docs)
    })
}

var updateDocument = function(db, callback){
    var collection = db.collection('documents')
    collection.updateOne({a: 2},{$set: {b:1}}, function(err, result){
        assert.equal(err, null)
        assert.equal(1, result.result.n)
        console.log("update");
        callback(result)
    })
}

var removeDocument = function(db, callback){
    var collection = db.collection('documents')
    collection.deleteOne({a: 3}, function(err, result){
        assert.equal(err, null)
        assert.equal(1, result.result.n)
        console.log("Removed");
        callback(result)
    })
}

var indexCollection = function(db, callback){
    db.collection('documents').createIndex(
        {a: 1},
        null,
        function(err, results){
            console.log(results);
            callback()
        }
    )
}

MongoClient.connect(url, function(err, db) {
    assert.equal(null, err)
    console.log("connected");
    findDocuments(db, function() {
        db.close();
    });
})
