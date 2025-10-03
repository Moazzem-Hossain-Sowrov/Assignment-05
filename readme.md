
Answer the following questions clearly:

1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll ?

  Ans: All of these are DOM selection methods used to find elements. getElementById is used to find element with an id. getElementsByClassName is used to find elements with class Name, querySelector is used to select first element that matches the search selector, while querySelectorAll selects all elements that matches the Css selector.

2. How do you create and insert a new element into the DOM ?

  Ans: createElement is To create a new element and use appendChild to the parent div to insert it to the DOM.

3. What is Event Bubbling and how does it work ?

  Ans: Event Bubbling is a method to find where is the event triggered. it starts from the root to its children, until it finds the element with the event triggered. then returns to up. stops once it reaches the root element.

4. What is Event Delegation in JavaScript? Why is it useful?

  Ans : Event Delegation is a way where event listener is added to a parent element instead of its child elements. its useful to save time and memory load. instead of using event listener on every child separately only used on their parent and then use target to identify who will trigger the event saves time and efforts.

5. What is the difference between preventDefault() and stopPropagation() methods?

  Ans : preventDefault() stop certain events from occurring. such as stops a form from reloading every time clicking a button.  stopPropagation() stops events from bubbling . 

