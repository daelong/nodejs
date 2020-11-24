const mongoose = require("mongoose");

mongoose //연결
  .connect("mongodb://127.0.0.1:27017/mongodb_tutorial", {
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to mongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

const UserSchema = new mongoose.Schema({
  //스키마 생성, mongodb에는 스키마가 없지만 Mongoose에서는 Schema를 정의해줄 수 있다.컬렉션에 들어가는 문서 내부의 각 필드가 어떤 식으로 되어있는지 정의하는 객체이다.
  name: {
    type: String,
    trim: true,
    required: true, //스키마를 정의할 때 required를 정해주면 나중에 name을 빼먹고 저장하려고 하면 에러가 발생함.
  },
  age: {
    type: Number,
    validate(value) {
      //age는 0보다 작으면 안됨 이를 검증할 수 있도록 validate()함수를 써줄수 있음
      if (value < 0) {
        throw new Error("Age must be a positive number");
      }
    },
  },
  saveDate: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

const me = new User({
  name: "John",
  age: 25,
});

me.save()
  .then(() => {
    console.log(me);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });
