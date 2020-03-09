# Art Institute of Chicago: A Digital Experience
## Problem and Related Work (P1)
### Problem and Motivation
In a largely technology driven world, sometimes it can be easy to forget the importance of art in our lives. Without art we would be missing one of the crucial ways we can express our fears, hopes, and dreams, which is all too important in an increasingly chaotic world. Consuming and creating art is a universal human experience, but unfortunately it’s often more accessible to some (e.g. wealthier, whiter patrons in major cities) than others and not everyone has the time or resources to spend a day at a museum. The cost of tickets, transportation, parking, and time make the experiencing and learning more about art, not accessible to everyone. For people who have a genuine interest in studying about art-and-culture from around the world, having every piece of information on hand would be great. In this project, we propose ArtAccess, a web-based platform that utilizes the Art Institute of Chicago’s new public API to collect artworks based on a number of configurable parameters.
### Analysis
Currently, there are a few web applications that provide works from artists from different museums, such as ​[Google Arts and Culture](https://artsandculture.google.com/​), ​[Folk Art Museum](https://folkartmuseum.org/​), ArtBrowser​, ​Artsy​, and ​Artcyclopedia​. However, each of these do not solve the problem at hand; they don’t provide users with a combination of filters to find something particular that they want, and many of them are geared towards selling modern artists works instead of sharing information about pieces one may find in a museum.
<br><br>
Specifically for the collection at The Art Institute of Chicago, there are not many projects that provide digital access. Of the few projects using The Art Institute of Chicago’s API, there is a Chrome extension that displays a random piece of artwork every time a user opens a new tab. This project also does not completely solve the problem. If a user wants to explore more or has an idea for art they would like to learn about, such as from a specific place or time period, they do not have that option.
<br><br>
The Art Institute of Chicago is one of the few museums with a public API. Even with a public API, there are not many developers taking advantage of it. Our app will be one of the only projects showcasing the collection at The Art Institute of Chicago, and will be one of the only apps giving users options about what they want to see.
While only experiencing The Art Institute of Chicago on an app is not ideal, it may expose more people to the art than in the past. Going to the museum and seeing art in person is a completely different experience that cannot be fully captured through this app. We do not intend to replace actually going to the museum but are merely providing a supplement for those curious about what is there.
<br><br>
The granularity of the Art Institute’s API allows the user to potentially search not only by artist and keywords, but also by place of origin, the text description found beside the artwork in the museum, the medium of the piece, the dominant color of the work, and much more. Adding this will enable one to study the specific set of artworks without having to browse through everything and it gives an overall sense to compare between different sets. ArtAccess could perhaps incorporate these in the web-app for the advantage of the users.

### Design Hypothesis
Our design hypothesis is to create a web application using The Art Institute of Chicago’s API that gives the user options to choose the artwork they want to explore. It will allow users to see the collection at the museum digitally, wherever they are. We can achieve this by having options or filters that refine their search through the collection at The Art Institute of Chicago. Whether users are interested in a specific time period, an artist, or a certain style, our app will provide a platform where they can learn more about art on their own terms.
<br><br>
Once we have the basic platform functioning, we have ideas to build onto it by adding more details and options into the search design, using color theory to find similar art, and adding recommendations based on artwork they’ve searched for. We also are interested in using ​GANs to produce art, which have in the past been used to deduce the pattern of artworks to help create new abstract pieces of art.

## User Research (P2 and P3)

### Interviews and Observations (P2)
#### Target user population
Our target user population ideally would be anyone who has access to Internet and phone/tablet/computer. More specifically within that population, we are thinking of people who are constrained by reasons like tight schedule, students, people having 9-5 jobs, people not living nearby cities/areas of art centres, people who might not be as tech-savvy, people of different ages, and people with physical disabilities who have difficulty accessing these museums. Our target user population also may include Art Enthusiasts, Art Majors, Local Artists who cannot always afford in terms of time or money to go visit a museum but experiencing art is of utmost interest and importance to them. For our first sample, we would like to experiment with a mix of age groups, preferably in the range of early 20s to late 50s but this might change as we develop the tool and carry out an in-depth case study. We would also like to consider people living outside of the Chicago region as well. Some of the classes we have identified would be art majors, local artists, students, working professionals, and people from rural areas. We also assume and hope that users have the basic knowledge to operate filters or search engine. 
#### Research Approach
We hope to learn how users perceive art museums and the 21st-century alternative - web/mobile apps. We assumed a few reasons, such as economic and income disparity, not belonging to the art community, and distance from the museum for why people may not attend museums frequently. We wanted to know implicitly if these reasons were a hindrance to going to museums or just our assumptions. We also wanted to know if users had previous experience with these kinds of apps and if they found it useful or not. If they used it, we wanted to know the use cases, glitches/difficulties in using it, and overall user perspective to evaluate how it differed from our assumptions. We decided to do a 50/50 approach of both - contextual inquiry/interview and a traditional questionnaire following it. Our research approach was as follows: 
#### Part I- Contextual Inquiry
<ol>
    <li>Observe them using Wikiart and Google Arts and Culture</li>
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
<br><br>
We had a few findings from this process that were surprising or unexpected. Users were frustrated that Google Arts and Culture didn’t only show artwork, but other images as well; for an application focusing on art, this was unexpected. The results of the users’ searches were not always obviously related, if related at all, to the user’s search terms, which made relevant art difficult to find. Since both of these applications are quite popular, it was surprising how frustrating the users found their search functions. We were also intrigued that the users wanted more details about the artwork than what was offered on both Google Arts and Culture and WikiArt.
<br><br>
Pain points that we need to think about as we move forward include the UI design and the search functionality. The UI played a vital role in the user preferring one application to the other. We should be aware of responsive design to make sure our app is accessible and easy to use no matter the device. We also need to think about ways to design the UI of our search functionality that is intuitive for the user. In terms of the search functionality, we found that the users’ searches were not successful most of the time. We need to be aware of how we build our search so it serves relevant content and leads to minimal frustration from users.
<br><br>
The main obstacles in the way of getting to the museum regularly were a lack of time, financial barriers, and physical accessibility.
<br><br>
We found opportunities for innovation in the following places. Users expressed an interest in understanding the relationship between different artworks and understanding the progression and development of an artist’s work overtime. They were also interested in learning more details about the artwork including what the piece depicts, the thought process behind it, how popular it is, and how many people have viewed it. Overall, these points had a similar theme of learning about the art and the artists in more of a narrative setting, which is an interesting and innovative concept to explore.
<br><br>
Users were interested in the idea of a community for artists and art enthusiasts that allowed them to comment and share artwork, and they enjoyed Google Arts and Culture’s collections (ie ‘Books inspired by famous artwork’) and expressed an interest in that kind of categorical presentation.
<br><br>
Our assumptions have changed since conducting our research. From our interviews, we identified that none of the users witnessed any societal or structural barriers in the form of classism or racism. The users did point out that a few of the reasons why they couldn’t visit the museum as often was due to financial and distance barriers.
<br><br>

#### Re-shaping the project idea
We observed that most of the users showed frustration with the search functionality and features, and seemed disappointed they could not peruse the artwork more organically. We also noticed that users were interested in knowing more details about the artwork, such as the explanation of the piece, its importance, and the thought process behind its creation -- as one interviewee put it, “not everyone has time or resources to take an art history course”, and it seemed our users would enjoy an experience that gave them a deeper understanding of the art at hand. The new goal of our project is to deliver an accessible art browsing experience, where users can easily and organically search for artwork and  receive more information on the pieces that furthers their appreciation of the art.

### Personas, Scenarios, & Features (P3)
#### Personas
<strong>Noor</strong>
<br>
Age: 27
<br>
Occupation: PhD candidate for computational social science
<br>
Hometown: San Jose, California
<br>
Bio: Noor lives in Skokie while she’s working towards her PhD at Northwestern University. She’s a hard worker who loves cooking challenging dishes, heart-to-heart conversations with friends, and cracking into a fresh book when she has time. 
<br>
Needs: Noor loves balancing the technical parts of her computational research with philosophical and artistic hobbies. She likes anything that challenges her perspective, or encourages her to think, and wants more opportunities to discuss artistic meaning with other people.
<br>
Pain Points:  She wishes she had more time for museums and cultural events, but has struggled to squeeze them into her busy schedule. This is particularly tough with the limited transportation to Skokie. Noor doesn’t have the resources to take an art history class, but wants to learn more about the patterns in art and how works change over time. 

---

John
<br>
Age: 55
<br>
Occupation: Mechanical Engineer
<br>
Hometown: Skokie, IL
<br>
Bio: John has been staying in Chicago for the past 35 years now and loves the cold weather. He drives his son to school when needed and likes to go on tours around the world. He’s a father of two who lives in his bungalow.
<br>
Needs: John likes to know about the cultures of different places and their evolution with time. He likes chatting in the native language of the places he visits. He strongly believes that storytelling by locals and museums are the best depictions of cultures. 
<br>
Pain points: It has become quite difficult for John to plan tours these days given the schedule of his children and wife. Also due to his age and related medical restrictions, he cannot fly every now and then.

---

Lizzie
<br>
Age: 28
<br>
Occupation: Artist: painter
<br>
Hometown: Aurora, Illinois
<br>
Bio: Lizzie is an artist/painter and works at a Creative Art Studio based out of Naperville. As a part of her job Lizzie often conducts step-by-step canvas painting art sessions for couples and private parties. 
<br>
Needs: Lizzie is on the constant lookout for fresh art pieces and artworks that can be used as an inspiration for her sessions. She believes that artists learn from looking at other artist’s works, during her art major she often wandered leisurely through museums and local art galleries and could spend hours immersing herself in the strokes, techniques and focus of a particular artwork. 
<br>
Pain Points: Finding the time to visit museums and keeping within her monthly budget. 

---

Jennifer
<br>
Age: 25
<br>
Occupation: Researcher
<br>
Hometown: Lafayette, Indiana
<br>
Bio: Jennifer is a PhD candidate in biology in UChicago. She is interested in contemporary art, and often visits Chicago Art Institute for new exhibitions. 
<br>
Needs: Jennifer wants to be able to virtually visit art exhibitions throughout the world, as she can not travel due to time constraints. She has been using the WikiArt platform constantly for the last 2 years. However, she is still not satisfied with UX of the platform, since it doesn’t give real-experience. 
<br>
Pain points: It is hard to reach the art institute by public transportation, I need to switch three times the buses in order to reach downtown Chicago.

---

Lauren
<br>
Age: 34
<br>
Occupation: Occupational Therapist
<br>
Hometown: Dublin, Ohio
<br>
Bio: Lauren is a millennial mom with 2 young children under 6. She works during the weekdays but has evenings and weekends to do fun activities with her kids. While not an art enthusiast or scholar, she enjoys museums and learning about art and history. She lives in the suburbs and is a significant drive from the nearest city.
Needs: Lauren would like to make it to the museum more often (or really, at all!) with her children.
<br>
Pain Points: She lives away from the city and has found it difficult to travel to museums, especially with 2 kids in tow.

---

#### Scenarios
Scenario 1:
Noor is picking photos for her new personal website. She wants to search for an image of a floral painting she had seen at the Art Institute of Chicago last year, but she can’t remember the title or artist. She only remembers what the flowers looked like, the main colors used, and that it was from Italy.
<br>
<br>
Scenario 2:
John wishes there was some easier way to quench his thirst for knowledge of art and culture. He tried a few museum websites but with the level of familiarity with technology, he finds it quite overwhelming. 
<br>
<br>
Scenario 3:
Lizzie is looking for popular artworks to teach at her next canvas painting art-studio session but can’t find any inspiring works of art, moreover, most of her web search results are low-resolution artworks. 
<br>
<br>
Scenario 4:
Jennifer wants to have a better digital platform which can give more useful and interesting information about the Artwork. The platform also should have a simple yet intuitive user interface, because available platforms are quite complex and hard to navigate. 
<br>
<br>
Scenario 5:
Lauren wants to do an arts and crafts activity with her 5 year old where they make pictures out of dots (pointillism). She would like to use one website to pull up examples of this style for her and her child to explore together while creating their own art.

#### Features
Essential Features:
<ul>
    <li>Searching based on an artistic style would help Lauren find examples of the particular style she was seeking for her activity. Noor also wants to find art based on certain parameters like artist name, piece name, and time period.</li>
    <li>A way for users like John to explore art options when they don’t have anything in particular in mind and find the other searching features overwhelming -- such as  viewing artworks randomly chosen by the platform. </li>
    <li>Users like Lizzie could benefit from a categorized search, such as top ten most popular artworks or books inspired from famous artworks to keep her work at the studio fresh and relevant. </li>
</ul>

Nice-to-have Features:
<ul>
    <li>Suggesting art/artists/styles related to what was searched may help users find more examples of what they’re looking for, potentially giving them better results. This could help Lauren find more examples of what she was searching for, as well as provide inspiration for her next art activity.</li>
    <li>Users like Noor expressed interest in the idea of an artist community, one that allows users to leave comments and or start conversations about popular artworks.</li>
    <li>John mentioned having a need to explore different cultures around the world and not just Chicago, so a feature that allows us to integrate information from other cultural institutions would be ideal.</li>
</ul>


