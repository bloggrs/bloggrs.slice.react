import React from "react";

export default props => {
    return (
        <div className="row" style={{ margin: 5 }}>
            <div className="col-lg-4">
            <div className="card mb-3">
                <div className="row no-gutters">
                <div className="col-md-3 align-self-center text-center">
                    <img
                    className=""
                    height={80}
                    src="https://bloggrs-platform-i1.herokuapp.com/coming-soon.png"
                    alt="Card image"
                    style={{
                        width: 98,
                        height: 80,
                        objectFit: "cover",
                        margin: "0 auto"
                    }}
                    />
                </div>
                <div className="col-md-9">
                    <div className="card-header">
                    <div className="row align-items-center">
                        <div className="col">
                        <h4 className="card-title">Gjergj's Blog</h4>
                        </div>
                        {/*end col*/}
                        <div className="col-auto">
                        <img
                            className="rounded-circle"
                            src="assets/images/users/user-7.jpg"
                            alt=""
                            height={24}

                        />
                        <span className="badge badge-outline-light">30 May 2020</span>
                        </div>
                        {/*end col*/}
                    </div>{" "}
                    {/*end row*/}
                    </div>
                    {/*end card-header*/}
                    <div className="card-body">
                    <p className="card-text">
                        This is a wider card with supporting text below as a natural lead-in
                        er card with supporting text below as a natural lead-in to
                        additional content.
                    </p>
                    <p className="card-text">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </p>
                    </div>
                    {/*end card-body*/}
                </div>
                {/*end col*/}
                </div>
                {/*end row*/}
            </div>
            {/*end card*/}
            </div>
        </div>
    )
}