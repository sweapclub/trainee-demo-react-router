import React from 'react';
import {
  Switch,
  Route,
  Link,
  useRouteMatch,
} from 'react-router-dom';

function About() {
  let {path, url} = useRouteMatch();

  return (
    <div>
      <h2>About me !</h2>
      <ul>
        <li>
          <Link to={`${url}/my-profile`}>My Profile</Link>
        </li>
        <li>
          <Link to={`${url}/child-route`}>How to do this</Link>
        </li>
        <li>
          <Link to={`${url}/gift-to-mean`}>Message to MEEN</Link>
        </li>
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a topic.</h3>
        </Route>
        <Route path={`${path}/:my-profile`}>
          <MyProfile />
        </Route>
        <Route path={`${path}/child-route`}>
          <ChildRouter />
        </Route>
        <Route path={`${path}/gift-to-mean`}>
          <Gift />
        </Route>
      </Switch>
    </div>
  );
}

function MyProfile() {
  return <h1> My name is nut and i hate react </h1>;
}

function ChildRouter() {
  return (
    <div>
      <h4>How to do this</h4>
      <p>
        1. ใช้ useRouteMatch เพื่อเอา path / url มาใช้ต่อ เพื่อกันความหลอน
        อย่างที่มีนเจอ
      </p>
      <p>
        2. ทำเหมือนกับ Router แรกเลย แต่อัน Child(ข้างใน) ไม่ต้องมี Router ครอบ
        เพราะมันควรจะเป็นแค่อันเดียว
      </p>
      <p>
        3. ไส้ในคล้ายกันมี link to / switch Route แต้่แค่ตรง Route path เติม
        path ที่ได้มาจาก useRouteMatch และตรง to ใช้ url ที่ได้มาจากที่เดียนวกัน
      </p>{' '}
    </div>
  );
}

function Gift() {
  return (
    <div>
      <h4>เข้าใจว่าน่าจะกระทบโครงสร้างเยอะนะ แต่ก็ รบกวนหน่อย</h4>
      <p>
        อย่าลืมเปิด Branch ใหม่และลองทำก่อน พอทำเสร็จเรียกให้ตจวจก็ได้
        เดี๋ยวเข้ามาดูให้
      </p>
      <p>
        ติดอะไรถามได้ ทักมาเลย หรืออ่านแล้วยัง งง ๆ เพราะพี่ก็ใช้ React ไม่เปนอะ
      </p>
    </div>
  );
}

export default About;
