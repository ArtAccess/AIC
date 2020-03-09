# Art Institute of Chicago: A Digital Experience
## Problem and Related Work (P1)
### Problem and Motivation
In a largely technology driven world, sometimes it can be easy to forget the importance of art in our lives. Without art we would be missing one of the crucial ways we can express our fears, hopes, and dreams, which is all too important in an increasingly chaotic world. Consuming and creating art is a universal human experience, but unfortunately it’s often more accessible to some (e.g. wealthier, whiter patrons in major cities) than others and not everyone has the time or resources to spend a day at a museum. The cost of tickets, transportation, parking, and time make the experiencing and learning more about art, not accessible to everyone. For people who have a genuine interest in studying about art-and-culture from around the world, having every piece of information on hand would be great. In this project, we propose ArtAccess, a web-based platform that utilizes the Art Institute of Chicago’s new public API to collect artworks based on a number of configurable parameters.
### Analysis
Currently, there are a few web applications that provide works from artists from different museums, such as ​https://artsandculture.google.com/​, ​https://folkartmuseum.org/​, ArtBrowser​, ​Artsy​, and ​Artcyclopedia​. However, each of these do not solve the problem at hand; they don’t provide users with a combination of filters to find something particular that they want, and many of them are geared towards selling modern artists works instead of sharing information about pieces one may find in a museum.
<br>
Specifically for the collection at The Art Institute of Chicago, there are not many projects that provide digital access. Of the few projects using The Art Institute of Chicago’s API, there is a Chrome extension that displays a random piece of artwork every time a user opens a new tab. This project also does not completely solve the problem. If a user wants to explore more or has an idea for art they would like to learn about, such as from a specific place or time period, they do not have that option.
<br>
The Art Institute of Chicago is one of the few museums with a public API. Even with a public API, there are not many developers taking advantage of it. Our app will be one of the only projects showcasing the collection at The Art Institute of Chicago, and will be one of the only apps giving users options about what they want to see.
While only experiencing The Art Institute of Chicago on an app is not ideal, it may expose more people to the art than in the past. Going to the museum and seeing art in person is a completely different experience that cannot be fully captured through this app. We do not intend to replace actually going to the museum but are merely providing a supplement for those curious about what is there.
<br>
The granularity of the Art Institute’s API allows the user to potentially search not only by artist and keywords, but also by place of origin, the text description found beside the artwork in the museum, the medium of the piece, the dominant color of the work, and much more. Adding this will enable one to study the specific set of artworks without having to browse through everything and it gives an overall sense to compare between different sets. ArtAccess could perhaps incorporate these in the web-app for the advantage of the users.

### Design Hypothesis
Our design hypothesis is to create a web application using The Art Institute of Chicago’s API that gives the user options to choose the artwork they want to explore. It will allow users to see the collection at the museum digitally, wherever they are. We can achieve this by having options or filters that refine their search through the collection at The Art Institute of Chicago. Whether users are interested in a specific time period, an artist, or a certain style, our app will provide a platform where they can learn more about art on their own terms.
<br>
Once we have the basic platform functioning, we have ideas to build onto it by adding more details and options into the search design, using color theory to find similar art, and adding recommendations based on artwork they’ve searched for. We also are interested in using ​GANs to produce art, which have in the past been used to deduce the pattern of artworks to help create new abstract pieces of art.

## User Research (P2 and P3)

### Interviews and Observations (P2)
#### Target user population
Our target user population ideally would be anyone who has access to Internet and phone/tablet/computer. More specifically within that population, we are thinking of people who are constrained by reasons like tight schedule, students, people having 9-5 jobs, people not living nearby cities/areas of art centres, people who might not be as tech-savvy, people of different ages, and people with physical disabilities who have difficulty accessing these museums. Our target user population also may include Art Enthusiasts, Art Majors, Local Artists who cannot always afford in terms of time or money to go visit a museum but experiencing art is of utmost interest and importance to them. For our first sample, we would like to experiment with a mix of age groups, preferably in the range of early 20s to late 50s but this might change as we develop the tool and carry out an in-depth case study. We would also like to consider people living outside of the Chicago region as well. Some of the classes we have identified would be art majors, local artists, students, working professionals, and people from rural areas. We also assume and hope that users have the basic knowledge to operate filters or search engine. 
#### Research Approach
We hope to learn how users perceive art museums and the 21st-century alternative - web/mobile apps. We assumed a few reasons, such as economic and income disparity, not belonging to the art community, and distance from the museum for why people may not attend museums frequently. We wanted to know implicitly if these reasons were a hindrance to going to museums or just our assumptions. We also wanted to know if users had previous experience with these kinds of apps and if they found it useful or not. If they used it, we wanted to know the use cases, glitches/difficulties in using it, and overall user perspective to evaluate how it differed from our assumptions. We decided to do a 50/50 approach of both - contextual inquiry/interview and a traditional questionnaire following it. Our research approach was as follows: 
#### Part I- Contextual Inquiry
<ol>
    <li>Observe them using [Wikiart](https://www.wikiart.org/) and [Google Arts and Culture](https://artsandculture.google.com/)</li>
    <li>Introduce yourself and our problem statement. Describe the structure of this interview. Make the interviewee feel comfortable, and assure them that we’re evaluating the websites together (it is not us evaluating the interviewee). </li>
    <li>In Wikiart: Ask the user to search for artwork of “people eating or drinking together” - let them pick the search terms. See if Nighthawks (1942), by Edward Hopper, comes up (don’t mention it, hide artist and name in window): 
        https://www.artic.edu/artworks/111628/nighthawks </li>
    <li>Show them just the image of Nighthawks (link above), and ask them to search for that particular image -- don’t tell them the name or the artist (if they already know, then ask them not to use that in the query).</li>
    <li>Repeat steps 3-4 for Google Arts.</li>
</ol>

#### Part II- Interview
Now that contextual inquiry is done, ask the following questions:
<ol>
    <li>How many times a year do you go to a museum? How many times do you wish you could go? How often might you use an art app instead?</li>
    <li>Have you felt like there are structural or societal barriers that have kept you from going to the museum more often?</li>
    <li>Were you familiar with Google Arts or Wikiart before this experience? If so, what parts of it have you used?</li>
    <li>How might you use the app in your daily life? (ex: tool to find album art)</li>
    <li>How was your experience using Wikiart and Google Arts? Which did you prefer, and why? </li>
    <li>Is there anything in the web apps that would’ve made the task easier?</li>
    <li>Any other thoughts or feelings you had while using these apps?</li>
</ol>

#### What we learned
Through our interviews and observations, we found that the user needs were primarily around better search functionality and receiving more information about the artwork.
<br>
We had a few findings from this process that were surprising or unexpected. Users were frustrated that Google Arts and Culture didn’t only show artwork, but other images as well; for an application focusing on art, this was unexpected. The results of the users’ searches were not always obviously related, if related at all, to the user’s search terms, which made relevant art difficult to find. Since both of these applications are quite popular, it was surprising how frustrating the users found their search functions. We were also intrigued that the users wanted more details about the artwork than what was offered on both Google Arts and Culture and WikiArt.
<br>
Pain points that we need to think about as we move forward include the UI design and the search functionality. The UI played a vital role in the user preferring one application to the other. We should be aware of responsive design to make sure our app is accessible and easy to use no matter the device. We also need to think about ways to design the UI of our search functionality that is intuitive for the user. In terms of the search functionality, we found that the users’ searches were not successful most of the time. We need to be aware of how we build our search so it serves relevant content and leads to minimal frustration from users.
<br>
The main obstacles in the way of getting to the museum regularly were a lack of time, financial barriers, and physical accessibility.
<br>
We found opportunities for innovation in the following places. Users expressed an interest in understanding the relationship between different artworks and understanding the progression and development of an artist’s work overtime. They were also interested in learning more details about the artwork including what the piece depicts, the thought process behind it, how popular it is, and how many people have viewed it. Overall, these points had a similar theme of learning about the art and the artists in more of a narrative setting, which is an interesting and innovative concept to explore.
<br>
Users were interested in the idea of a community for artists and art enthusiasts that allowed them to comment and share artwork, and they enjoyed Google Arts and Culture’s collections (ie ‘Books inspired by famous artwork’) and expressed an interest in that kind of categorical presentation.
<br>
Our assumptions have changed since conducting our research. From our interviews, we identified that none of the users witnessed any societal or structural barriers in the form of classism or racism. The users did point out that a few of the reasons why they couldn’t visit the museum as often was due to financial and distance barriers.
<br>

#### Re-shaping the project idea
We observed that most of the users showed frustration with the search functionality and features, and seemed disappointed they could not peruse the artwork more organically. We also noticed that users were interested in knowing more details about the artwork, such as the explanation of the piece, its importance, and the thought process behind its creation -- as one interviewee put it, “not everyone has time or resources to take an art history course”, and it seemed our users would enjoy an experience that gave them a deeper understanding of the art at hand. The new goal of our project is to deliver an accessible art browsing experience, where users can easily and organically search for artwork and  receive more information on the pieces that furthers their appreciation of the art.