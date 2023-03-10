const React = require('react');
const Layout = require('./Layout');

const Reg = ({ title }) => {
  return (
    <Layout title={title}>
      <div className="registration">
        <form className="form" action="/admin/login" method="POST" id="formReg">
        
          <div className="form-floating mb-3 inp">
            <div>
              <label className="emPas" for="floatingInput">
                Email address{' '}
              </label>
            </div>
            <input
              type="email"
              className="form-control writeZone"
              id="floatingInput"
              name="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="form-floating inp">
            <div>
              <label className="emPas" for="floatingPassword">
                Password{' '}
              </label>
            </div>
            <input
              type="password"
              className="form-control writeZone"
              id="floatingPassword"
              name="password"
              placeholder="Password"
            />
          </div>
          <div className="form-floating inp">
            <div>
              <label className="emPas" for="floatingPassword">
                Password 2{' '}
              </label>
            </div>
            <input
              type="password"
              className="form-control writeZone"
              id="floatingPassword2"
              name="password2"
              placeholder="Password2"
            />
          </div>
          <div className="form-floating inp">
            <input
              type="submit"
              className="form-control btn"
              id="floatingSubmit"
              placeholder="Password"
            />
          </div>
        </form>
      </div>
    </Layout>
  );
};
module.exports = Reg;
