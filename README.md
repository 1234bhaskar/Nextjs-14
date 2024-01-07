<h1>Client-side Rendering /Components (CSR)</h1>
<h2>How it works</h2>
<p>In Client-Side Rendering (CSR) with React, the browser downloads a minimal HTML page and the JavaScript needed for the page. The JavaScript is then used to update the DOM and render the page. When the application is first loaded, the user may notice a slight delay before they can see the full page, this is because the page isn't fully rendered until all the JavaScript is downloaded, parsed, and executed.

After the page has been loaded for the first time, navigating to other pages on the same website is typically faster, as only necessary data needs to be fetched, and JavaScript can re-render parts of the page without requiring a full page refresh.</p>
<img width="364" alt="Screenshot 2024-01-08 004519" src="https://github.com/1234bhaskar/Nextjs-14_Course/assets/104014529/53a57e53-da06-44de-9f3d-76f960ea312a">
<h2>Pros and Cons</h2>
<img width="287" alt="Screenshot 2024-01-08 004911" src="https://github.com/1234bhaskar/Nextjs-14_Course/assets/104014529/e000525b-02db-4ce7-be23-b50742add54a">
<br/>
<h3>Good to know</h3>
 Keep in mind that CSR can impact SEO. Some search engine crawlers might not execute JavaScript and therefore only see the initial empty or loading state of your application. It can also lead to performance issues for users with slower internet connections or devices, as they need to wait for all the JavaScript to load and run before they can see the full page. Next.js promotes a hybrid approach that allows you to use a combination of server-side rendering, static site generation, and client-side rendering, depending on the needs of each page in your application. In the App Router, you can also use Loading UI with Suspense to show a loading indicator while the page is being rendered.
