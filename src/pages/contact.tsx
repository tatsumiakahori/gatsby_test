import React, { useState } from "react";
import type { PageProps } from "gatsby";
import Layout from "../components/layout";

const Contact = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  return (
    <Layout>
      <section className="section-layout">
        <form
          method="post"
          action="/success"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <h2>お問い合わせ</h2>
          <ul>
            <li>
              <label>氏名</label>
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </li>
            <li>
              <label>内容</label>
              <input
                type="textarea"
                name="content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                required
              />
            </li>
          </ul>
          <button type="submit">送信</button>
        </form>
      </section>
    </Layout>
  );
};

export default Contact;
