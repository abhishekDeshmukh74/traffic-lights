if you’re connecting from a machine that has access to a browser, you can also enter your database server’s address into your browser’s address bar and connect from there.
For example: http://ds125402.mlab.com:25402


Export prod database
mongodump -h ds125402.mlab.com:25402 -d abhishek-deshmukh-prod -u M0rpheu5 -p M0rpheu5 -o export


db.comment.update({}, { $set:{ likes: 0, disLikes: 0} })

obvious in hindsight

No like, no dislike
 liked - like++

No like, no dislike
 dislike - dislike++

Existing like, no dislike
 like - unlike,

Existing like, no dislike
 dislike - undislike

No like, Existing dislike
like -  dislike-- like++

No like, Existing dislike
dislike - dislike--
