import "./App.css";
import Button from "./elements/button";

function App() {
	const color = "FFFFE1";

	return (
		<div className="app">
			<main>
				<div id="header-pane">
					<h1>Welcome to a world of ethic computers</h1>
				</div>

				<div id="content-pane">
					<div id="social" className="item">
						<div className="content">
							<h3>
								Let's build a community around ethical computing !
							</h3>
							<p id="elem1">
								<ul>
									<li>
										<em>Community Engagement:</em> We're
										encouraging the formation of local
										groups focused on ethical computing.
										These groups can organize workshops,
										repair cafes, and educational sessions
										to promote the use of recyclable and
										long-lasting computers.
									</li>
									<li>
										<em>Social Media Campaigns:</em> We've
										launched campaigns on the internet to
										raise awareness about the benefits of
										ethical computers. Use hashtags like
										<em> #EthicalComputing</em>,
										<em> #RecycleTech</em>, and
										<em> #FairTech</em> to reach a wider
										audience.
									</li>
									<li>
										<em>Partnerships:</em> We collaborate
										with schools, universities, and
										non-profit organizations like
										<em> The Linux Software Foundation</em>
										to spread the message. Offer incentives
										for institutions that adopt ethical
										computing practices.
									</li>
								</ul>
							</p>
						</div>
						<img
							className="img-round"
							src="/meme-social.png"
							alt="IUT Image"
						/>
					</div>
					<div id="support" className="item">
						<div className="content">
							<h3>Supporting Ethical Choices</h3>
							<p id="elem1">
								<ul>
									<li>
										<em>Consumer Guides:</em> We're creating
										some guides that help consumers identify
										ethical computer brands and models.
										Highlight certifications and labels that
										indicate fair labor practices and
										environmental sustainability.
									</li>
									<li>
										<em>Technical Support:</em> We provide
										resources for maintaining and upgrading
										computers to extend their lifespan. We
										also offer tutorials on basic computer
										maintenance and repair.
									</li>
									<li>
										<em>Customer Service:</em> We wish to
										establish a hotline or an online
										platform where users can get advice on
										ethical computing, including how to
										recycle old computers and where to buy
										ethical ones.
									</li>
								</ul>
							</p>
						</div>
						<img
							className="img-round"
							src="/meme-support.jpg"
							alt="IUT Image"
						/>
					</div>
					<div id="action" className="item">
						<div className="content">
							<h3>Taking Action for a Sustainable Future</h3>
							<p id="elem1">
								<ul>
									<li>
										<em>Recycling Programs:</em> Set up and
										promote computer recycling programs.
										Partner with e-waste recycling companies
										to ensure that old computers are
										disposed of responsibly.
									</li>
									<li>
										<em>Advocacy:</em> We advocate for policies
										that encourage the production and use of
										ethical computers. Engage with
										policymakers to push for regulations
										that support fair labor practices and
										environmental sustainability in the tech
										industry.
									</li>
									<li>
										<em>Corporate Responsibility:</em>{" "}
										Encourage tech companies to adopt
										ethical practices by supporting those
										that already do and by calling out those
										that don’t. Create a list of ethical
										tech companies and promote their
										products.
									</li>
								</ul>
							</p>
						</div>
						<img
							className="img-round"
							src="/meme-action.png"
							alt="IUT Image"
						/>
					</div>
					<div id="signal" className="item">
						<div className="content">
							<h3>
								Signaling the Importance of Ethical Computing
							</h3>
							<p id="elem1">
								<ul>
									<li>
										<em>Awareness Campaigns:</em> Use
										various media channels to signal the
										importance of ethical computing. Create
										impactful advertisements, documentaries,
										and articles that highlight the issues
										and benefits.
									</li>
									<li>
										<em>Events and Conferences:</em>
										Organize and participate in events and
										conferences focused on ethical
										computing. Use these platforms to signal
										key messages and to network with other
										advocates and professionals in the
										field.
									</li>
									<li>
										<em>Influencer Partnerships:</em>{" "}
										Collaborate with influencers and thought
										leaders who can signal the importance of
										ethical computing to their followers.
										Use their reach to amplify your message.
									</li>
								</ul>
							</p>
						</div>
						<img
							className="img-round"
							src="/meme-signal.png"
							alt="IUT Image"
						/>
					</div>
					<div id="stories" className="item">
						<div className="content">
							<h3>Stories of Change and Impact</h3>
							<p id="elem1">
								<ul>
									<li>
										<em>Success Stories:</em> Share stories
										of individuals and organizations that
										have successfully adopted ethical
										computing practices. Highlight the
										positive impact on their operations and
										the environment.
									</li>
									<li>
										<em>Worker Stories:</em> Tell the
										stories of workers in the tech industry
										who benefit from fair labor practices.
										Highlight how ethical computing improves
										their lives and communities.
									</li>
									<li>
										<em>Consumer Testimonials:</em> Collect
										and share testimonials from consumers
										who have switched to ethical computers.
										Discuss their experiences and the
										benefits they have observed.
									</li>
								</ul>
							</p>
						</div>
						<img
							className="img-round"
							src="/meme-stories.png"
							alt="IUT Image"
						/>
					</div>
				</div>

				<div id="footer-pane">
					<div className="footer-item" id="authors">
						<h4>Authors</h4>
						<ul>
							<li>Grégoire MARION</li>
							<li>Donatien VACHETTE</li>
						</ul>
					</div>
					<div className="footer-item" id="credits">
						<h4>Credits</h4>
						<ul>
							<li>Copyright {new Date().getFullYear()} ©</li>
							<li>[Benjamin | Baptiste]</li>
						</ul>
					</div>
					<div>
						<h4>See also</h4>
						<ul>
							<li>
								<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
									Useful link
								</a>
							</li>
							{/* <li><a href="http://p2400602.pages.univ-lyon1.fr/why-linux/form.html">12</a></li> */}
						</ul>
					</div>
				</div>
			</main>
			<aside className="sidebar">
				<Button
					id="bt-1"
					label="Home"
					onclick={() => scrollToElement("header-pane")}
					iconPath={
						"https://img.icons8.com/fluency-systems-filled/500/" +
						color +
						"/home.png "
					}
				/>
				<Button
					id="bt-2"
					label="Social"
					onclick={() => scrollToElement("social")}
					iconPath={
						"https://img.icons8.com/material-rounded/500/" +
						color +
						"/user-group-man-man.png"
					}
				/>
				<Button
					id="bt-3"
					label="Support"
					onclick={() => scrollToElement("support")}
					iconPath={
						"https://img.icons8.com/sf-ultralight-filled/500/" +
						color +
						"/flex-biceps.png"
					}
				/>
				<Button
					id="bt-4"
					label="Action"
					onclick={() => scrollToElement("action")}
					iconPath={
						"https://img.icons8.com/material-rounded/500/" +
						color +
						"/lightning-bolt--v1.png"
					}
				/>
				<Button
					id="bt-5"
					label="Signal"
					onclick={() => scrollToElement("signal")}
					iconPath={
						"https://img.icons8.com/ios-glyphs/500/" +
						color +
						"/commercial.png"
					}
				/>
				<Button
					id="bt-6"
					label="Stories"
					onclick={() => scrollToElement("stories")}
					iconPath={
						"https://img.icons8.com/ios-glyphs/500/" +
						color +
						"/book.png"
					}
				/>
				<Button
					id="bt-7"
					label="Credits"
					onclick={() => scrollToElement("footer-pane")}
					iconPath={
						"https://img.icons8.com/material-rounded/500/" +
						color +
						"/creative-commons.png"
					}
				/>
			</aside>
		</div>
	);
}

function scrollToElement(id: string) {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({ behavior: "smooth" });
	}
}

export default App;
