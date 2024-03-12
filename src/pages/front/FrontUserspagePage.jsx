import React from "react";
import "./css/Userspage.css";

const FrontUserspagePage = () => {
  return (
    <div className="w-full container">
      <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-5 lg:gap-10">
        {[...Array(20)].map((item, index) => (
          <div className="flex flex-col sm:flex-row bg-backgroundv1 p-4 rounded-lg">
            <img
              className="profile-avatar"
              src="https://images.unsplash.com/photo-1483909796554-bb0051ab60ad?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2lybCUyMHByb2ZpbGV8ZW58MHx8MHx8fDA%3D"
              alt="avatar"
            />
            <div className="profile-info flex flex-col gap-2">
              <p className="text-32 font-semibold text-textPrimary">
                Julia Stone
              </p>
              <p
                id="activity"
                className="text-24 font-semibold text-textPrimary pb-4"
              >
                Photographer and Web designer
              </p>
              <div id="stats" className="mt-3">
                <p className="stats-text">
                  <svg viewBox="0 0 24 24">
                    <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                  </svg>
                  <h3 className="text-24 text-black">5k</h3>
                  followers
                </p>
                <p className="stats-text">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                    <path
                      fill-rule="evenodd"
                      d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <h3 className="text-24 text-black">147</h3>
                  Following
                </p>
              </div>
              <div className="profile-btns">
                <p id="btn">Follow</p>
                <p id="btn">Chat</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontUserspagePage;
