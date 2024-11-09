import{a as x,t as k}from"../chunks/disclose-version.CT4FqHsS.js";import{c as e,s as i,r as t,y as m}from"../chunks/runtime.BF4ddQLO.js";import{s as a}from"../chunks/attributes.Dk3bRcNo.js";import{b as p}from"../chunks/paths.BCdrNYwi.js";import{F as L}from"../chunks/FoodExample.DCbU8dDU.js";const T=""+new URL("../assets/example.DTv2tH3v.gif",import.meta.url).href,F=""+new URL("../assets/spotifySearchImage.DwjxwRHI.jpg",import.meta.url).href;var S=k(`<article class="prose-gray prose-base text-white"><div class=" border-white mb-10"><h1>FiTL (Filter Table Language)</h1> <h3>A simple language for filtering tables, because sometimes search algorithms just suck.</h3> <img alt="Example Query"></div> <ul class="list-inside border-b border-white pb-5"><li><h2>Learn more about <a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">How to Write Queries <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></h2></li> <li><h2>Check out an interactive example with example queries on <a class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Playlist filter <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></h2></li> <li><h2>Written for Rust, WASM and JavaScript <a href="https://github.com/Slad3/FilterTableQueryLanguage" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">Check out the source on GitHub <svg class="w-4 h-4 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"></path></svg></a></h2></li></ul> <h2>What is FiTL?</h2> <p>FiTL (Filter Table Language) is a simple query langauge allowing end users to quickly and
		specifically filter rows from a table. Users filter rows from tables based on columns and
		conditional statements for those columns. Multiple conditional statemens can be combined/chained
		to allow for further specificity of table results. Designed to be easy to implement for
		developers, easy to learn and remember for general users, but also allows room to master for
		power users.</p> <p>FiTL (Filter Table Language) is a simple query langauge allowing end users to quickly and
		specifically filter rows from a table. Designed in mind for developers to wrap their
		search/filter box in a function and immediately implement it into their application, FiTL allows
		end users to easily filter down singular tables with column specific parameters. This leaves the
		overall guessing and frustrations when it comes to what search algorithms will include/exclude
		down to a minimum. With just a surface level knowledge of the language, users are able to get .
		With just a more experience with the language, users are able to filter down a table with
		precise parameters including and excluding exactly what they queried for.</p> <h2>Why did I create FiTL?</h2> <p>Because Spotify and Genius.com's search algorithm really freaking sucks.</p> <h2>Real world potential implementations include:</h2> <ul class="space-y-1 list-outside list-disc"><li>Music Playlists (IE: Spotify Liked songs or an already made playlist)</li> <li>Search Page on Product pages (whether in blank search page or just filtering down search
			results)</li> <li>Movie/Video search results (Netflix/Hulu/IMDB searching/filtering)</li></ul> <div><h2>Why FiTL over</h2></div> <div><h2>Advantages Over a General Search Algorithm</h2> <p>Why develop and/or learn an entire language just to do a more specific search?</p> <p>In my experience with typical applications (especially ones on the web), search works ever so
			slightly differently on each site. While the inconsistency is usually the biggest problem, the
			leeway when it comes to searching/filtering down a table can get frustrating if not confusing.
			While search acceptance is based on the use case of the application, underdeveloped
			applications (IE old product pages) may provide a search that is too strict and will not catch
			many obvious cases.</p> <p>Many modern applications (Spotify...) however may provide a search that either catches not
			only too many cases, or also catches strange cases where you are left wondering how it got
			that result from that search query. For example, why am I getting "the Way You Make Me Feel"
			by Michael Jackson and "How Do I Make You Love Me" by The Weeknd from the query: <b>"you the make"</b>? "the" is not even in the title "How Do I Make You Love Me"?</p> <img alt="Spotify's Odd Filtering Algorithm"> <p>The Simple answer is that it doesn't get just search for exact (or close matches) in song
			titles, rather it super fuzzy searches within all fields. An algorithm that works for the most
			part most of the time, but is very difficult to get specific, especially when I just want to
			quickly make a temp playlist of all my liked songs from a specific artist right before I hit
			the road.</p> <p>-- Spotify Rant Over --</p> <p>This is not something specifically directed at Spotify as many other modern services (YouTube,
			Reddit, Genius.com, etc, all share similar problems), Spotify is just where I filter tables
			data the most.</p> <p>So how does FiTL fix that?</p> <ol class=" space-y-1 list-disc list-outside"><li>FiTL allows the same kind of quick fuzzy filtering, but also allows for more specific
				filtering</li> <li>FiTL's syntax will stay the same across applications (granted they implement the library),
				leaving less room for guessing and unexpected behavior for searches and filtering</li> <li>Compared to writing your own filtering algorithm, FiTL is more efficient to implement and
				more efficient to run, since the library is either compiled into raw binary, or into web
				assembly keeping it lightweight and responsive</li> <li>If all else, FiTL can run along side your own search/filtering algorithm by allowing users
				to further filter down search results</li></ol></div> <div><h2>Why not just use SQL? (or a modified version of sql)</h2> <ul class=" space-y-1 list-disc list-outside"><li>FiTL is designed to be easier to type in a simple text box, especially on mobile devices</li> <li>SQL is easy enough to learn, but FiTL is made to be easy enough for people who touch grass</li> <li>SQL allows for table joining while FiTl is limited to singular table interacitons</li> <li>In general FiTL is meant for quickly filtering an existing table for end user use while SQL
				is meant for more reusable structured queries. Although neither is contrained to previously
				said purposes.</li></ul></div> <div class="py-5 mt-5 border-t border-white" id="foodExample"><h1>Interactive Example</h1> <p>Here's an interactive example with a table of food. Feel free to try out any of the example
			queries below or to write your own queries.</p> <!></div></article>`);function q(f){var s=S(),r=e(s),g=i(e(r),4);a(g,"src",T),t(r);var o=i(r,2),l=e(o),h=e(l),w=i(e(h));a(w,"href",`${p??""}/queries`),t(h),t(l);var c=i(l,2),u=e(c),y=i(e(u));a(y,"href",`${p??""}/playlist`),t(u),t(c),m(2),t(o);var n=i(o,18),b=i(e(n),8);a(b,"src",F),m(10),t(n);var d=i(n,4),v=i(e(d),4);L(v,{}),t(d),t(s),x(f,s)}export{q as component};
