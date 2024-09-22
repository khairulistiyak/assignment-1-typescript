{


    // **********************************************************
    // The significance of union and intersection types in Typesc
    // **********************************************************



    ইউনিয়ন এবং ইন্টারসেকশন টাইপের গুরুত্ব অনেক।

    1. (Union Types)
    ইউনিয়ন টাইপ একটি ভেরিয়েবলের মধ্যে একাধিক ধরনের মান ধারণ করার ক্ষমতা রাখে ।  
    যেমন  :
    let num : string | number;
    num = "abir ";
    num = 42;
    
    এখানে, num  ভেরিয়েবলটি string অথবা number ধরনের হতে পারে। এখানে ২টা মান  রাখা যায়। চাইলে আমরা আরো মান যুক্ত করতে পারবো।
    
    2;
    Intersection Types
    বিভিন্ন টাইপ কে একত্রিত করার জন্য ব্যবহার করা হয়। ২ টা বা তার বেশি টাইপ কে আমরা একত্রে প্রকাশ করতে পারি।  এখানে ২ টা  টাইপ এর ভ্যালুকেই দেখতে হবে।
     যেমনঃ
    
    interface Student {
      name: string;
      studentId: number;
    }
    
    interface Employee {
      name: string;
      company: string;
    }
    
    type StudentEmployee = Student & Employee;
    


  // **********************************************************
    // Why are Type Guards Necessary? Discuss Various Types of Type Guards and Their Use Cases.
    // **********************************************************


  Typeof Guard:এটি জাভাস্ক্রিপ্টের typeof অপারেটর ব্যবহার করে রানটাইমে ভেরিয়েবলের টাইপ চেক করে।
  যেমন:

  const price = (price: string | number) => {
    if (typeof price === "number") {
      return `Padded ${price}`;
    }
    return price;
  };
}
