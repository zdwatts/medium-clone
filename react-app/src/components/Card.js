import React from "react";
import "./Card.css";

const Card = ({ story, idx }) => {
	return (
    <div className="card">
      <svg
        height="100%"
        width="100%"
        id="bg-svg"
        viewBox="0 0 1440 600"
        xmlns="http://www.w3.org/2000/svg"
        class="transition duration-300 ease-in-out delay-150"
      >
        <path
          d="M 0,600 C 0,600 0,200 0,200 C 97.42583732057417,218.95693779904306 194.85167464114835,237.91387559808612 279,243 C 363.14832535885165,248.08612440191388 434.01913875598086,239.30143540669857 522,222 C 609.9808612440191,204.69856459330143 715.0717703349281,178.88038277511964 819,185 C 922.9282296650719,191.11961722488036 1025.6937799043062,229.17703349282297 1129,237 C 1232.3062200956938,244.82296650717703 1336.153110047847,222.41148325358853 1440,200 C 1440,200 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="#fcb90088"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
        <path
          d="M 0,600 C 0,600 0,400 0,400 C 116.1531100478469,431.9712918660287 232.3062200956938,463.9425837320574 316,448 C 399.6937799043062,432.0574162679426 450.92822966507174,368.200956937799 539,367 C 627.0717703349283,365.799043062201 751.9808612440191,427.25358851674645 855,430 C 958.0191387559809,432.74641148325355 1039.1483253588517,376.7846889952153 1133,362 C 1226.8516746411483,347.2153110047847 1333.4258373205741,373.6076555023924 1440,400 C 1440,400 1440,600 1440,600 Z"
          stroke="none"
          stroke-width="0"
          fill="#fcb900ff"
          class="transition-all duration-300 ease-in-out delay-150"
        ></path>
      </svg>
      <h1 className="card-number">0{idx + 1}</h1>
      <h2>
        <a className="card-title" href={`/stories/${story.id}`}>
          {story.title}
        </a>
      </h2>
      <p>Written By: {story.author_name}</p>
    </div>
  );
};

export default Card;
