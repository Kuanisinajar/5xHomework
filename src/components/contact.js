import React, { Component } from "react";

class Contact extends Component {
    state = {};
    render() {
        return (
            <section id="contacts">
                <header className="contacts_header">
                    <h1>有任何問題嗎？馬上聯絡我們</h1>
                </header>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 contactForm_wrapper">
                            <form
                                action=""
                                className="contactForm container-fluid"
                            >
                                <div className="row">
                                    <label className="col-12 col-md-6">
                                        您的名字
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="名字"
                                            required
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        您的信箱
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="信箱"
                                            required
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        您的電話
                                        <input
                                            type="text"
                                            name="phone"
                                            placeholder="電話"
                                            required
                                        />
                                    </label>
                                    <label className="col-12 col-md-6">
                                        詢問主題
                                        <select
                                            name="topic"
                                            defaultValue="default"
                                            required
                                        >
                                            <option
                                                value="default"
                                                disabled
                                                hidden
                                            >
                                                請選擇主題
                                            </option>
                                            <option value="project">
                                                專案開發
                                            </option>
                                            <option value="technical">
                                                技術諮詢
                                            </option>
                                            <option value="coporation">
                                                企業內訓
                                            </option>
                                            <option value="course">
                                                課程詢問
                                            </option>
                                            <option value="other">其他</option>
                                        </select>
                                    </label>
                                    <label className="col-12">
                                        您的訊息
                                        <textarea
                                            name="message"
                                            id=""
                                            cols="30"
                                            rows="10"
                                            placeholder="請留下您的訊息"
                                            required
                                        ></textarea>
                                    </label>
                                </div>

                                <button>送出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Contact;
