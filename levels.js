/**
 * LEVELS DATA - Complete 8 Worlds, 64 Levels
 * Full DSA Curriculum Through Games
 */

const WORLDS = [
    {
        id: 1,
        name: "The Warehouse",
        icon: "📦",
        desc: "Learn to manage inventory in a busy warehouse. Master the fundamentals of working with lists of items.",
        concept: "Arrays & Loops"
    },
    {
        id: 2,
        name: "Delivery Hub",
        icon: "🚚",
        desc: "Optimize package delivery routes. Learn to organize and find things efficiently.",
        concept: "Sorting & Searching"
    },
    {
        id: 3,
        name: "Restaurant Kitchen",
        icon: "🍳",
        desc: "Manage orders in a busy kitchen. Learn about order and timing.",
        concept: "Stacks & Queues"
    },
    {
        id: 4,
        name: "Music Player",
        icon: "🎵",
        desc: "Build a playlist system. Learn about connected sequences.",
        concept: "Linked Structures"
    },
    {
        id: 5,
        name: "File Explorer",
        icon: "📁",
        desc: "Navigate folder hierarchies. Learn about branching structures.",
        concept: "Trees"
    },
    {
        id: 6,
        name: "City Transit",
        icon: "🚇",
        desc: "Build a metro navigation system. Learn about connections and paths.",
        concept: "Graphs"
    },
    {
        id: 7,
        name: "Social Network",
        icon: "👥",
        desc: "Build social features. Learn about fast lookups and relationships.",
        concept: "Hash Tables"
    },
    {
        id: 8,
        name: "Game Economy",
        icon: "🎮",
        desc: "Design game mechanics. Learn about optimal decision making.",
        concept: "Dynamic Programming"
    },
    {
        id: 9,
        name: "Mirror World",
        icon: "🪞",
        desc: "Solve puzzles that repeat themselves. Learn to think in patterns within patterns.",
        concept: "Recursion"
    },
    {
        id: 10,
        name: "Puzzle Master",
        icon: "🧩",
        desc: "Find solutions by trying all possibilities. Learn to explore and backtrack.",
        concept: "Backtracking"
    },
    {
        id: 11,
        name: "Binary Lab",
        icon: "💻",
        desc: "Work at the bit level. Learn the language computers speak.",
        concept: "Bit Manipulation"
    },
    {
        id: 12,
        name: "Strategy Kingdom",
        icon: "👑",
        desc: "Make optimal choices at each step. Learn when good-enough is perfect.",
        concept: "Greedy Algorithms"
    },
    {
        id: 13,
        name: "E-Commerce Platform",
        icon: "🛒",
        desc: "Build a shopping backend. Master the art of efficient product filtering and matching.",
        concept: "Two Pointers"
    },
    {
        id: 14,
        name: "Streaming Service",
        icon: "🎬",
        desc: "Build video analytics. Learn to analyze sequences and patterns in data streams.",
        concept: "Sliding Window"
    },
    {
        id: 15,
        name: "Calendar App",
        icon: "📅",
        desc: "Build a scheduling system. Master time-based operations and conflict resolution.",
        concept: "Intervals"
    },
    {
        id: 16,
        name: "Spell Checker",
        icon: "🔤",
        desc: "Build autocomplete and spell checking. Master the Trie data structure for fast string operations.",
        concept: "Tries"
    }
];

const LEVELS = [
    // ==================== WORLD 1: THE WAREHOUSE ====================
    {
        id: "1.1",
        world: 1,
        name: "Inventory Counter",
        desc: "Count all items on the warehouse shelves.",
        mission: "The warehouse manager needs to know how many items are in stock. Given an array of shelf items, return the TOTAL COUNT of all items.",
        hint: "You need to go through each shelf and add up the quantities.",
        reveal: "You just learned ITERATION - going through each item one by one. This is the foundation of all programming!",
        starterCode: `function solve(shelves) {
  // shelves = array of numbers [5, 3, 8, 2]
  // Return the total count (5+3+8+2 = 18)
  
  return 0;
}`,
        testCases: [
            { input: [[5, 3, 8, 2]], expected: 18 },
            { input: [[10, 20, 30]], expected: 60 },
            { input: [[1, 1, 1, 1, 1]], expected: 5 }
        ],
        xpReward: 50
    },
    {
        id: "1.2",
        world: 1,
        name: "Stock Finder",
        desc: "Check if a specific product exists.",
        mission: "Given the inventory array and a target item, return TRUE if it exists, FALSE if not.",
        hint: "Check each item and see if it matches what you're looking for.",
        reveal: "You discovered LINEAR SEARCH - checking each element until you find what you need!",
        starterCode: `function solve(inventory, target) {
  // Return true if target is in inventory
  
  return false;
}`,
        testCases: [
            { input: [[101, 205, 303, 404], 303], expected: true },
            { input: [[101, 205, 303, 404], 999], expected: false },
            { input: [[42], 42], expected: true }
        ],
        xpReward: 60
    },
    {
        id: "1.3",
        world: 1,
        name: "Quality Control",
        desc: "Find all defective products.",
        mission: "Products with ID less than 100 are defective. Return an array of ONLY the defective product IDs.",
        hint: "Go through each item and collect only the ones that match your condition.",
        reveal: "You learned FILTERING - selecting only items that meet certain criteria!",
        starterCode: `function solve(inventory) {
  // Return array of IDs that are less than 100
  
  return [];
}`,
        testCases: [
            { input: [[50, 150, 30, 200, 99]], expected: [50, 30, 99] },
            { input: [[100, 200, 300]], expected: [] },
            { input: [[10, 20, 30]], expected: [10, 20, 30] }
        ],
        xpReward: 70
    },
    {
        id: "1.4",
        world: 1,
        name: "Price Updater",
        desc: "Apply a 10% discount to all prices.",
        mission: "Given an array of prices, return a NEW array with all prices reduced by 10%.",
        hint: "Create a new array where each element is 90% of the original.",
        reveal: "You discovered MAPPING - transforming each element into something new!",
        starterCode: `function solve(prices) {
  // Return new array with each price * 0.9
  
  return [];
}`,
        testCases: [
            { input: [[100, 200, 50]], expected: [90, 180, 45] },
            { input: [[10]], expected: [9] },
            { input: [[1000, 500]], expected: [900, 450] }
        ],
        xpReward: 70
    },
    {
        id: "1.5",
        world: 1,
        name: "Best Seller",
        desc: "Find the highest sales number.",
        mission: "Return the MAXIMUM value in the sales array.",
        hint: "Keep track of the biggest number you've seen so far.",
        reveal: "You learned FINDING MAX - tracking the extreme value!",
        starterCode: `function solve(sales) {
  // Return the highest number
  
  return 0;
}`,
        testCases: [
            { input: [[45, 89, 23, 67, 12]], expected: 89 },
            { input: [[100]], expected: 100 },
            { input: [[5, 5, 5, 5]], expected: 5 }
        ],
        xpReward: 80
    },
    {
        id: "1.6",
        world: 1,
        name: "Stock Alert",
        desc: "Count low-stock products.",
        mission: "Return the COUNT of products with quantity below 10.",
        hint: "Count items that meet a specific condition.",
        reveal: "You combined FILTERING and COUNTING!",
        starterCode: `function solve(quantities) {
  // Return count of items with quantity < 10
  
  return 0;
}`,
        testCases: [
            { input: [[5, 15, 3, 20, 8, 12]], expected: 3 },
            { input: [[10, 10, 10]], expected: 0 },
            { input: [[1, 2, 3]], expected: 3 }
        ],
        xpReward: 80
    },
    {
        id: "1.7",
        world: 1,
        name: "Inventory Value",
        desc: "Calculate total inventory value.",
        mission: "Each product has a price and quantity. Return sum of (price × quantity) for all products.",
        hint: "Multiply each pair and add them all together.",
        reveal: "You mastered ACCUMULATION with computation!",
        starterCode: `function solve(prices, quantities) {
  // Return sum of (price[i] × quantity[i])
  
  return 0;
}`,
        testCases: [
            { input: [[10, 20, 5], [3, 2, 10]], expected: 120 },
            { input: [[100], [5]], expected: 500 }
        ],
        xpReward: 90
    },
    {
        id: "1.8",
        world: 1,
        name: "Warehouse Audit",
        desc: "🏆 BOSS: Complete inventory system",
        mission: "The warehouse needs a full audit report! Given an array of products (each with id, price, and quantity), calculate: 1) Total items in stock (sum of all quantities), 2) Total inventory value (sum of price × quantity), 3) Low stock count (how many products have quantity < 10), 4) Has defective (true if ANY product has id < 100). Return an object with these 4 properties.",
        hint: "Loop through products once - calculate all 4 values in a single pass using everything you've learned!",
        reveal: "You've mastered ARRAY FUNDAMENTALS - iteration, filtering, mapping, and aggregation all in one!",
        starterCode: `function solve(products) {
  // products = [{id, price, quantity}, ...]
  // Return: {
  //   totalItems: sum of quantities
  //   totalValue: sum of (price × quantity)
  //   lowStockCount: count where quantity < 10
  //   hasDefective: true if any id < 100
  // }
  
  return {
    totalItems: 0,
    totalValue: 0,
    lowStockCount: 0,
    hasDefective: false
  };
}`,
        testCases: [
            {
                input: [[
                    { id: 101, price: 10, quantity: 5 },
                    { id: 50, price: 20, quantity: 3 },
                    { id: 200, price: 5, quantity: 15 }
                ]],
                expected: { totalItems: 23, totalValue: 185, lowStockCount: 2, hasDefective: true }
            }
        ],
        xpReward: 150,
        isBoss: true
    },

    // ==================== WORLD 1.A: ADVANCED WAREHOUSE (SUBLEVELS) ====================
    {
        id: "1.A.1",
        world: 1,
        name: "Two Item Lookup",
        desc: "🔓 ADVANCED: Find pair summing to target.",
        mission: "A customer wants to spend EXACTLY their gift card amount. Given product prices and a target value, find TWO products that sum to exactly the target. Return their indices [i, j] where i < j. This is the famous Two Sum!",
        hint: "Use a hash map to store seen values and their indices. For each price, check if (target - price) exists.",
        reveal: "Two Sum - THE most common interview question! Hash map gives O(n) time!",
        starterCode: `function solve(prices, target) {
  // Return [i, j] where prices[i] + prices[j] = target
  // Return [] if no such pair exists
  
  return [];
}`,
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[3, 2, 4], 6], expected: [1, 2] },
            { input: [[3, 3], 6], expected: [0, 1] }
        ],
        xpReward: 120,
        isAdvanced: true
    },
    {
        id: "1.A.2",
        world: 1,
        name: "Rotate Stock",
        desc: "🔓 ADVANCED: Rotate inventory positions.",
        mission: "Warehouse reorganization! Rotate the inventory array to the right by K positions. Items that fall off the right appear on the left. Do it IN-PLACE with O(1) extra space!",
        hint: "The trick: reverse entire array, then reverse first K, then reverse the rest. Three reversals!",
        reveal: "Array Rotation - the reversal algorithm is elegant! O(n) time, O(1) space!",
        starterCode: `function solve(inventory, k) {
  // Rotate array right by k positions in-place
  // Return the modified array
  
  return inventory;
}`,
        testCases: [
            { input: [[1, 2, 3, 4, 5, 6, 7], 3], expected: [5, 6, 7, 1, 2, 3, 4] },
            { input: [[-1, -100, 3, 99], 2], expected: [3, 99, -1, -100] },
            { input: [[1, 2], 3], expected: [2, 1] }
        ],
        xpReward: 130,
        isAdvanced: true
    },
    {
        id: "1.A.3",
        world: 1,
        name: "Missing Shipment",
        desc: "🔓 ADVANCED: Find the missing item.",
        mission: "A shipment should contain items numbered 0 to n, but ONE is missing! Given an array of n distinct numbers in range [0, n], find the missing number. Use O(1) extra space!",
        hint: "Math trick: sum of 0 to n is n*(n+1)/2. Or use XOR: a^a=0, a^0=a.",
        reveal: "Missing Number - use math sum or XOR magic! Both are O(n) time, O(1) space!",
        starterCode: `function solve(shipment) {
  // shipment contains n numbers from 0 to n (one missing)
  // Return the missing number
  
  return 0;
}`,
        testCases: [
            { input: [[3, 0, 1]], expected: 2 },
            { input: [[0, 1]], expected: 2 },
            { input: [[9, 6, 4, 2, 3, 5, 7, 0, 1]], expected: 8 }
        ],
        xpReward: 110,
        isAdvanced: true
    },
    {
        id: "1.A.4",
        world: 1,
        name: "Majority Supplier",
        desc: "🔓 ADVANCED: Find the dominant element.",
        mission: "One supplier provides MORE than half of all products. Find which supplier ID appears more than n/2 times. They're guaranteed to exist. Use O(1) space!",
        hint: "Boyer-Moore Voting Algorithm: keep a candidate and count. Increment for same, decrement for different. Winner survives!",
        reveal: "Majority Element - Boyer-Moore is brilliant! The majority survives all cancellations!",
        starterCode: `function solve(suppliers) {
  // Find element appearing more than n/2 times
  // O(1) extra space required
  
  return 0;
}`,
        testCases: [
            { input: [[3, 2, 3]], expected: 3 },
            { input: [[2, 2, 1, 1, 1, 2, 2]], expected: 2 },
            { input: [[1]], expected: 1 }
        ],
        xpReward: 140,
        isAdvanced: true
    },
    {
        id: "1.A.5",
        world: 1,
        name: "Stock Profit",
        desc: "🔓 ADVANCED: Best time to buy and sell.",
        mission: "You can buy on one day and sell on a later day. Given daily stock prices, find the maximum profit possible. If no profit is possible, return 0.",
        hint: "Track the minimum price seen so far. For each day, calculate potential profit and track maximum.",
        reveal: "Best Time to Buy and Sell Stock - single pass! Track min and max profit!",
        starterCode: `function solve(prices) {
  // Return maximum profit from one buy and one sell
  // Must buy before selling
  
  return 0;
}`,
        testCases: [
            { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
            { input: [[7, 6, 4, 3, 1]], expected: 0 },
            { input: [[2, 4, 1]], expected: 2 }
        ],
        xpReward: 120,
        isAdvanced: true
    },
    {
        id: "1.A.6",
        world: 1,
        name: "Advanced Warehouse Master",
        desc: "🏆 SUB-BOSS: All advanced patterns.",
        mission: "Prove your advanced array mastery! Return: 1) Indices of two items summing to target, 2) The missing number from 0-n sequence, 3) Maximum stock profit possible.",
        hint: "Combine hash map for two-sum, math/XOR for missing, and min-tracking for profit!",
        reveal: "You've conquered ADVANCED ARRAYS - ready for any interview!",
        starterCode: `function solve(prices, target, sequence, stockPrices) {
  // Return: {
  //   twoSum: [i, j] where prices[i] + prices[j] = target
  //   missingNum: the missing number in sequence
  //   maxProfit: best profit from stockPrices
  // }
  
  return {
    twoSum: [],
    missingNum: 0,
    maxProfit: 0
  };
}`,
        testCases: [
            {
                input: [[2, 7, 11, 15], 9, [3, 0, 1], [7, 1, 5, 3, 6, 4]],
                expected: { twoSum: [0, 1], missingNum: 2, maxProfit: 5 }
            }
        ],
        xpReward: 250,
        isBoss: true,
        isAdvanced: true
    },

    // ==================== WORLD 2: DELIVERY HUB ====================
    {
        id: "2.1",
        world: 2,
        name: "Package Priority",
        desc: "Find the smallest package.",
        mission: "Return the MINIMUM weight from the packages array.",
        hint: "Track the smallest value you've seen.",
        reveal: "FINDING MIN is key to selection-based algorithms!",
        starterCode: `function solve(weights) {
  // Return the smallest weight
  
  return 0;
}`,
        testCases: [
            { input: [[15, 8, 23, 4, 12]], expected: 4 },
            { input: [[100]], expected: 100 },
            { input: [[5, 5, 5]], expected: 5 }
        ],
        xpReward: 60
    },
    {
        id: "2.2",
        world: 2,
        name: "Sort Packages",
        desc: "Arrange from smallest to largest.",
        mission: "Sort the packages by weight ascending. Return a NEW sorted array. DO NOT use built-in sort!",
        hint: "Repeatedly find the minimum and build a new array.",
        reveal: "You implemented SELECTION SORT thinking!",
        starterCode: `function solve(weights) {
  // Return new array sorted smallest to largest
  // No built-in sort allowed!
  
  return [];
}`,
        testCases: [
            { input: [[5, 2, 8, 1, 9]], expected: [1, 2, 5, 8, 9] },
            { input: [[3, 1, 2]], expected: [1, 2, 3] }
        ],
        xpReward: 100
    },
    {
        id: "2.3",
        world: 2,
        name: "Express Lane",
        desc: "Split packages by weight.",
        mission: "Light packages (weight <= 10) go express. Return [lightArray, heavyArray].",
        hint: "Create two arrays and categorize each package.",
        reveal: "You discovered PARTITIONING - the core of QuickSort!",
        starterCode: `function solve(weights) {
  // Return [lightArray, heavyArray]
  
  return [[], []];
}`,
        testCases: [
            { input: [[5, 15, 8, 20, 3]], expected: [[5, 8, 3], [15, 20]] },
            { input: [[10, 11]], expected: [[10], [11]] }
        ],
        xpReward: 80
    },
    {
        id: "2.4",
        world: 2,
        name: "Merge Routes",
        desc: "Combine two sorted lists.",
        mission: "Both input arrays are already sorted. Merge them into one sorted array.",
        hint: "Compare the front of each list, take the smaller one.",
        reveal: "This is the MERGE operation from Merge Sort!",
        starterCode: `function solve(route1, route2) {
  // Both are sorted. Merge into one sorted array.
  
  return [];
}`,
        testCases: [
            { input: [[1, 3, 5], [2, 4, 6]], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[1, 2], [3, 4]], expected: [1, 2, 3, 4] }
        ],
        xpReward: 100
    },
    {
        id: "2.5",
        world: 2,
        name: "Duplicate Orders",
        desc: "Find repeated order IDs.",
        mission: "The input is SORTED. Find IDs that appear more than once. Return each duplicate once.",
        hint: "With sorted data, duplicates are next to each other.",
        reveal: "Sorted data makes finding duplicates O(n) instead of O(n²)!",
        starterCode: `function solve(orderIds) {
  // orderIds is SORTED
  // Return array of duplicate IDs
  
  return [];
}`,
        testCases: [
            { input: [[1, 1, 2, 3, 3, 3, 4]], expected: [1, 3] },
            { input: [[1, 2, 3, 4]], expected: [] }
        ],
        xpReward: 90
    },
    {
        id: "2.6",
        world: 2,
        name: "Fast Lookup",
        desc: "Find package efficiently.",
        mission: "The warehouse is SORTED. Find if target exists. Do it FAST - don't check every element!",
        hint: "Look at the middle. Is target bigger or smaller? Eliminate half each time.",
        reveal: "You invented BINARY SEARCH! O(log n) vs O(n)!",
        starterCode: `function solve(packageIds, target) {
  // packageIds is SORTED
  // Return true if target exists
  // Challenge: O(log n) - don't check every element!
  
  return false;
}`,
        testCases: [
            { input: [[1, 3, 5, 7, 9, 11, 13], 7], expected: true },
            { input: [[1, 3, 5, 7, 9, 11, 13], 6], expected: false }
        ],
        xpReward: 120
    },
    {
        id: "2.7",
        world: 2,
        name: "Insert Order",
        desc: "Add to sorted list.",
        mission: "Insert newPackage into the sorted array so it stays sorted.",
        hint: "Find where it belongs, then insert there.",
        reveal: "INSERTION into sorted data - the idea behind Insertion Sort!",
        starterCode: `function solve(packages, newPackage) {
  // packages is sorted. Insert newPackage in correct position.
  
  return [];
}`,
        testCases: [
            { input: [[1, 3, 5, 7], 4], expected: [1, 3, 4, 5, 7] },
            { input: [[10, 20, 30], 5], expected: [5, 10, 20, 30] }
        ],
        xpReward: 90
    },
    {
        id: "2.8",
        world: 2,
        name: "Dispatch System",
        desc: "🏆 BOSS: Full sorting & searching",
        mission: "Return {sorted, hasPriority, duplicates, maxWeight}",
        hint: "Use everything: sorting, searching, filtering.",
        reveal: "You've mastered SORTING & SEARCHING!",
        starterCode: `function solve(packages, priorityId) {
  // packages = [{id, weight}, ...]
  // Return: {
  //   sorted: packages sorted by weight
  //   hasPriority: true if priorityId exists
  //   duplicates: ids that appear more than once
  //   maxWeight: the maximum weight
  // }
  
  return {
    sorted: [],
    hasPriority: false,
    duplicates: [],
    maxWeight: 0
  };
}`,
        testCases: [
            {
                input: [[{ id: 1, weight: 15 }, { id: 2, weight: 5 }, { id: 1, weight: 10 }], 2],
                expected: {
                    sorted: [{ id: 2, weight: 5 }, { id: 1, weight: 10 }, { id: 1, weight: 15 }],
                    hasPriority: true,
                    duplicates: [1],
                    maxWeight: 15
                }
            }
        ],
        xpReward: 200,
        isBoss: true
    },

    // ==================== WORLD 3: RESTAURANT KITCHEN ====================
    {
        id: "3.1",
        world: 3,
        name: "Order Queue",
        desc: "First order served first.",
        mission: "Orders come in with timestamps. Return the order that arrived FIRST (oldest).",
        hint: "Which order has the smallest arrivedAt value?",
        reveal: "You discovered FIFO (First-In-First-Out) - the Queue!",
        starterCode: `function solve(orders) {
  // orders = [{id, arrivedAt}, ...]
  // Return the order that arrived first
  
  return null;
}`,
        testCases: [
            { input: [[{ id: 'A', arrivedAt: 3 }, { id: 'B', arrivedAt: 1 }, { id: 'C', arrivedAt: 2 }]], expected: { id: 'B', arrivedAt: 1 } },
            { input: [[{ id: 'X', arrivedAt: 5 }]], expected: { id: 'X', arrivedAt: 5 } }
        ],
        xpReward: 70
    },
    {
        id: "3.2",
        world: 3,
        name: "Plate Stacker",
        desc: "Last plate used first.",
        mission: "Plates are stacked. Return the TOP plate (the one that was added LAST).",
        hint: "Which plate is at the end of the array?",
        reveal: "You discovered LIFO (Last-In-First-Out) - the Stack!",
        starterCode: `function solve(plates) {
  // plates = array of plate IDs
  // Return the top plate (last added)
  
  return null;
}`,
        testCases: [
            { input: [['red', 'blue', 'green', 'white']], expected: 'white' },
            { input: [['only']], expected: 'only' }
        ],
        xpReward: 60
    },
    {
        id: "3.3",
        world: 3,
        name: "Undo Actions",
        desc: "Reverse the last action.",
        mission: "Given action history, simulate UNDO by returning actions in reverse order.",
        hint: "Build a new array with elements in opposite order.",
        reveal: "Stacks naturally give you reverse order!",
        starterCode: `function solve(history) {
  // Return history reversed
  
  return [];
}`,
        testCases: [
            { input: [['open', 'type', 'save']], expected: ['save', 'type', 'open'] },
            { input: [['a', 'b', 'c', 'd']], expected: ['d', 'c', 'b', 'a'] }
        ],
        xpReward: 70
    },
    {
        id: "3.4",
        world: 3,
        name: "Bracket Checker",
        desc: "Validate recipe syntax.",
        mission: "Check if parentheses are balanced. '(())' is valid, '(()' is not.",
        hint: "Use a counter: +1 for '(', -1 for ')'. Never go negative.",
        reveal: "Parentheses matching is a classic Stack problem!",
        starterCode: `function solve(recipe) {
  // recipe = string with ( and )
  // Return true if balanced
  
  return false;
}`,
        testCases: [
            { input: ['(())'], expected: true },
            { input: ['(()'], expected: false },
            { input: ['()()()'], expected: true },
            { input: [')('], expected: false }
        ],
        xpReward: 90
    },
    {
        id: "3.5",
        world: 3,
        name: "Process Orders",
        desc: "Serve orders FIFO.",
        mission: "Given a queue of orders, process N orders and return them in the order processed (FIFO).",
        hint: "Take from the front of the queue.",
        reveal: "Queue processing - serving in arrival order!",
        starterCode: `function solve(orders, n) {
  // Return first N orders (or all if less than N)
  
  return [];
}`,
        testCases: [
            { input: [['A', 'B', 'C', 'D'], 2], expected: ['A', 'B'] },
            { input: [['X', 'Y'], 5], expected: ['X', 'Y'] }
        ],
        xpReward: 70
    },
    {
        id: "3.6",
        world: 3,
        name: "Priority Cooking",
        desc: "VIP orders first.",
        mission: "Orders have priority (1=VIP, 3=normal). Return the highest priority order (lowest number).",
        hint: "Find the order with minimum priority value.",
        reveal: "You just used a Priority Queue concept!",
        starterCode: `function solve(orders) {
  // orders = [{id, priority}, ...]
  // Return order with lowest priority number
  
  return null;
}`,
        testCases: [
            { input: [[{ id: 'A', priority: 2 }, { id: 'B', priority: 1 }, { id: 'C', priority: 3 }]], expected: { id: 'B', priority: 1 } }
        ],
        xpReward: 80
    },
    {
        id: "3.7",
        world: 3,
        name: "Expression Eval",
        desc: "Calculate recipe math.",
        mission: "Evaluate a simple expression like '3+5*2'. Multiply first, then add.",
        hint: "Handle * first, then handle +.",
        reveal: "Expression evaluation uses operator precedence - often with stacks!",
        starterCode: `function solve(expr) {
  // expr = string like "3+5*2"
  // * before +, left to right
  // Return the result
  
  return 0;
}`,
        testCases: [
            { input: ['3+5*2'], expected: 13 },
            { input: ['2*3+4'], expected: 10 },
            { input: ['1+2+3'], expected: 6 }
        ],
        xpReward: 100
    },
    {
        id: "3.8",
        world: 3,
        name: "Kitchen Manager",
        desc: "🏆 BOSS: Full order system",
        mission: "Return {nextOrder (FIFO), undoStack (reversed), isValidSyntax}",
        hint: "Combine queue, stack, and bracket matching.",
        reveal: "You've mastered STACKS & QUEUES!",
        starterCode: `function solve(orders, actions, syntax) {
  // Return: {
  //   nextOrder: first order (FIFO)
  //   undoStack: actions reversed
  //   isValidSyntax: are brackets balanced?
  // }
  
  return {
    nextOrder: null,
    undoStack: [],
    isValidSyntax: false
  };
}`,
        testCases: [
            {
                input: [['order1', 'order2'], ['a', 'b', 'c'], '(())'],
                expected: { nextOrder: 'order1', undoStack: ['c', 'b', 'a'], isValidSyntax: true }
            }
        ],
        xpReward: 180,
        isBoss: true
    },

    // ==================== WORLD 4: MUSIC PLAYER ====================
    {
        id: "4.1",
        world: 4,
        name: "Simple Playlist",
        desc: "Add songs to the end.",
        mission: "Given a playlist and a new song, add the song to the END and return the updated list.",
        hint: "Just append to the array.",
        reveal: "Adding to the end is O(1) - the basic linked list append!",
        starterCode: `function solve(playlist, newSong) {
  // Add newSong to end of playlist
  
  return [];
}`,
        testCases: [
            { input: [['A', 'B', 'C'], 'D'], expected: ['A', 'B', 'C', 'D'] },
            { input: [[], 'First'], expected: ['First'] }
        ],
        xpReward: 50
    },
    {
        id: "4.2",
        world: 4,
        name: "Insert Track",
        desc: "Add song at position.",
        mission: "Insert newSong at the given index position.",
        hint: "Everything after the position shifts right.",
        reveal: "Insertion at position - O(n) because of shifting!",
        starterCode: `function solve(playlist, index, newSong) {
  // Insert newSong at index
  
  return [];
}`,
        testCases: [
            { input: [['A', 'C', 'D'], 1, 'B'], expected: ['A', 'B', 'C', 'D'] },
            { input: [['X', 'Y'], 0, 'W'], expected: ['W', 'X', 'Y'] }
        ],
        xpReward: 70
    },
    {
        id: "4.3",
        world: 4,
        name: "Skip Track",
        desc: "Remove current song.",
        mission: "Remove the song at the given index and return the updated playlist.",
        hint: "Everything after the position shifts left.",
        reveal: "Deletion also requires shifting - O(n)!",
        starterCode: `function solve(playlist, index) {
  // Remove song at index
  
  return [];
}`,
        testCases: [
            { input: [['A', 'B', 'C', 'D'], 1], expected: ['A', 'C', 'D'] },
            { input: [['X'], 0], expected: [] }
        ],
        xpReward: 70
    },
    {
        id: "4.4",
        world: 4,
        name: "Shuffle Mode",
        desc: "Access random song.",
        mission: "Return the song at the given index (0-based).",
        hint: "Direct index access.",
        reveal: "Random access is O(1) in arrays - a key advantage!",
        starterCode: `function solve(playlist, index) {
  // Return song at index
  
  return null;
}`,
        testCases: [
            { input: [['A', 'B', 'C', 'D'], 2], expected: 'C' },
            { input: [['X'], 0], expected: 'X' }
        ],
        xpReward: 50
    },
    {
        id: "4.5",
        world: 4,
        name: "Repeat Mode",
        desc: "Loop back to start.",
        mission: "Given current index, return the NEXT song index. If at end, loop to 0.",
        hint: "Use modulo to wrap around.",
        reveal: "Circular lists naturally loop around!",
        starterCode: `function solve(playlistLength, currentIndex) {
  // Return next index (wrap around at end)
  
  return 0;
}`,
        testCases: [
            { input: [5, 2], expected: 3 },
            { input: [5, 4], expected: 0 },
            { input: [3, 0], expected: 1 }
        ],
        xpReward: 60
    },
    {
        id: "4.6",
        world: 4,
        name: "Previous Track",
        desc: "Go backwards.",
        mission: "Return the PREVIOUS song index. If at start, loop to end.",
        hint: "Handle the edge case when index is 0.",
        reveal: "Doubly linked lists allow backward traversal!",
        starterCode: `function solve(playlistLength, currentIndex) {
  // Return previous index (wrap if at start)
  
  return 0;
}`,
        testCases: [
            { input: [5, 2], expected: 1 },
            { input: [5, 0], expected: 4 },
            { input: [3, 1], expected: 0 }
        ],
        xpReward: 60
    },
    {
        id: "4.7",
        world: 4,
        name: "Merge Playlists",
        desc: "Combine two playlists.",
        mission: "Concatenate playlist2 after playlist1.",
        hint: "Join the two arrays together.",
        reveal: "List concatenation - merging linked structures!",
        starterCode: `function solve(playlist1, playlist2) {
  // Return combined playlist
  
  return [];
}`,
        testCases: [
            { input: [['A', 'B'], ['C', 'D']], expected: ['A', 'B', 'C', 'D'] },
            { input: [[], ['X']], expected: ['X'] }
        ],
        xpReward: 60
    },
    {
        id: "4.8",
        world: 4,
        name: "Music Player",
        desc: "🏆 BOSS: Full player controls",
        mission: "Implement add, remove, next, prev operations.",
        hint: "Combine all playlist operations.",
        reveal: "You've mastered LINKED STRUCTURES!",
        starterCode: `function solve(playlist, operations) {
  // operations = [{type, value, index}, ...]
  // type: 'add', 'remove', 'next', 'prev'
  // Start at index 0
  // Return: {finalPlaylist, currentIndex}
  
  let currentIndex = 0;
  // Process each operation
  
  return {
    finalPlaylist: playlist,
    currentIndex: currentIndex
  };
}`,
        testCases: [
            {
                input: [['A', 'B', 'C'], [{ type: 'next' }, { type: 'add', value: 'D' }, { type: 'prev' }]],
                expected: { finalPlaylist: ['A', 'B', 'C', 'D'], currentIndex: 0 }
            }
        ],
        xpReward: 180,
        isBoss: true
    },

    // ==================== WORLD 5: FILE EXPLORER ====================
    {
        id: "5.1",
        world: 5,
        name: "Folder Size",
        desc: "Calculate total size.",
        mission: "Given a folder with files (array of sizes), return the total size.",
        hint: "Sum up all the file sizes.",
        reveal: "Tree traversal starts with visiting all children!",
        starterCode: `function solve(files) {
  // files = array of file sizes
  // Return total
  
  return 0;
}`,
        testCases: [
            { input: [[100, 250, 50, 75]], expected: 475 },
            { input: [[1000]], expected: 1000 }
        ],
        xpReward: 60
    },
    {
        id: "5.2",
        world: 5,
        name: "Find File",
        desc: "Search for a file.",
        mission: "Given nested folders (object with arrays), find if a file exists anywhere.",
        hint: "Check current level, then recursively check subfolders.",
        reveal: "You used DEPTH-FIRST SEARCH (DFS)!",
        starterCode: `function solve(folder, target) {
  // folder = {files: [], subfolders: [...]}
  // Return true if target file exists anywhere
  
  return false;
}`,
        testCases: [
            { input: [{ files: ['a.txt', 'b.txt'], subfolders: [{ files: ['c.txt'], subfolders: [] }] }, 'c.txt'], expected: true },
            { input: [{ files: ['a.txt'], subfolders: [] }, 'x.txt'], expected: false }
        ],
        xpReward: 100
    },
    {
        id: "5.3",
        world: 5,
        name: "List All Files",
        desc: "Enumerate everything.",
        mission: "Return ALL file names from all subfolders as a flat array.",
        hint: "Collect files from current folder, then recurse into subfolders.",
        reveal: "Full tree traversal - visiting every node!",
        starterCode: `function solve(folder) {
  // Return all files as flat array
  
  return [];
}`,
        testCases: [
            { input: [{ files: ['a', 'b'], subfolders: [{ files: ['c', 'd'], subfolders: [] }] }], expected: ['a', 'b', 'c', 'd'] }
        ],
        xpReward: 90
    },
    {
        id: "5.4",
        world: 5,
        name: "Folder Depth",
        desc: "Count nesting levels.",
        mission: "Return the maximum depth of folder nesting. Root is depth 1.",
        hint: "1 + max depth of all subfolders.",
        reveal: "Tree depth is found by recursive max!",
        starterCode: `function solve(folder) {
  // Return max depth (root = 1)
  
  return 1;
}`,
        testCases: [
            { input: [{ subfolders: [{ subfolders: [{ subfolders: [] }] }] }], expected: 4 },
            { input: [{ subfolders: [] }], expected: 1 }
        ],
        xpReward: 80
    },
    {
        id: "5.5",
        world: 5,
        name: "Count Folders",
        desc: "Count all folders.",
        mission: "Return the total number of folders (including the root).",
        hint: "1 for current folder + count of all subfolders recursively.",
        reveal: "Counting nodes in a tree!",
        starterCode: `function solve(folder) {
  // Return total folder count
  
  return 0;
}`,
        testCases: [
            { input: [{ subfolders: [{ subfolders: [] }, { subfolders: [] }] }], expected: 4 },
            { input: [{ subfolders: [] }], expected: 1 }
        ],
        xpReward: 70
    },
    {
        id: "5.6",
        world: 5,
        name: "Sorted Insert",
        desc: "Add to sorted list.",
        mission: "Given a sorted array, insert a value and keep it sorted.",
        hint: "Find the right position, then insert.",
        reveal: "BST insertion maintains sorted order!",
        starterCode: `function solve(sorted, value) {
  // Insert value into sorted array
  
  return [];
}`,
        testCases: [
            { input: [[1, 3, 5, 7], 4], expected: [1, 3, 4, 5, 7] },
            { input: [[], 5], expected: [5] }
        ],
        xpReward: 80
    },
    {
        id: "5.7",
        world: 5,
        name: "Path Finder",
        desc: "Build path to file.",
        mission: "Return the path (array of folder names) to reach a target file.",
        hint: "Track the path as you recurse. Backtrack if not found.",
        reveal: "Path finding in trees uses recursive exploration!",
        starterCode: `function solve(folder, target) {
  // folder = {name, files, subfolders}
  // Return path array like ['root', 'docs', 'notes']
  // or [] if not found
  
  return [];
}`,
        testCases: [
            { input: [{ name: 'root', files: [], subfolders: [{ name: 'docs', files: ['a.txt'], subfolders: [] }] }, 'a.txt'], expected: ['root', 'docs'] }
        ],
        xpReward: 110
    },
    {
        id: "5.8",
        world: 5,
        name: "File Manager",
        desc: "🏆 BOSS: Full file operations",
        mission: "Return {totalFiles, maxDepth, pathToFile, allNames}",
        hint: "Combine counting, depth, path finding, and listing.",
        reveal: "You've mastered TREES!",
        starterCode: `function solve(folder, targetFile) {
  // Return: {
  //   totalFiles: count of all files
  //   maxDepth: deepest nesting level
  //   pathToFile: path to targetFile
  //   allNames: all file names flat
  // }
  
  return {
    totalFiles: 0,
    maxDepth: 0,
    pathToFile: [],
    allNames: []
  };
}`,
        testCases: [
            {
                input: [{ name: 'root', files: ['x'], subfolders: [{ name: 'sub', files: ['y', 'z'], subfolders: [] }] }, 'z'],
                expected: { totalFiles: 3, maxDepth: 2, pathToFile: ['root', 'sub'], allNames: ['x', 'y', 'z'] }
            }
        ],
        xpReward: 200,
        isBoss: true
    },

    // ==================== WORLD 5.A: ADVANCED FILES (SUBLEVELS) ====================
    {
        id: "5.A.1",
        world: 5,
        name: "Valid Structure",
        desc: "🔓 ADVANCED: Validate BST property.",
        mission: "Check if a folder structure is a valid Binary Search Tree - each folder's name (number) must be greater than all names in its left subtree and less than all in its right. This is Validate BST!",
        hint: "Track valid range [min, max] for each node. Pass updated bounds when recursing.",
        reveal: "Validate BST - range propagation! Each node must be within valid bounds!",
        starterCode: `function solve(tree) {
  // tree = { val, left, right } or null
  // Return true if valid BST
  
  return false;
}`,
        testCases: [
            { input: [{ val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } }], expected: true },
            { input: [{ val: 5, left: { val: 1, left: null, right: null }, right: { val: 4, left: null, right: null } }], expected: false }
        ],
        xpReward: 140,
        isAdvanced: true
    },
    {
        id: "5.A.2",
        world: 5,
        name: "Common Ancestor",
        desc: "🔓 ADVANCED: Find lowest common ancestor.",
        mission: "Find the deepest folder that contains both files p and q. This is the Lowest Common Ancestor (LCA) - the closest shared parent of two nodes.",
        hint: "If current node is p or q, return it. Recurse left and right. If both return non-null, current is LCA.",
        reveal: "LCA - post-order traversal! If both sides find targets, current node is the answer!",
        starterCode: `function solve(tree, p, q) {
  // Return value of lowest common ancestor of p and q
  
  return null;
}`,
        testCases: [
            { input: [{ val: 3, left: { val: 5, left: { val: 6, left: null, right: null }, right: { val: 2, left: null, right: null } }, right: { val: 1, left: null, right: null } }, 5, 1], expected: 3 },
            { input: [{ val: 3, left: { val: 5, left: { val: 6, left: null, right: null }, right: null }, right: null }, 5, 6], expected: 5 }
        ],
        xpReward: 150,
        isAdvanced: true
    },
    {
        id: "5.A.3",
        world: 5,
        name: "Mirror Check",
        desc: "🔓 ADVANCED: Check if symmetric.",
        mission: "Check if a folder structure is a mirror of itself - symmetric around its center. Left subtree should mirror right subtree.",
        hint: "Compare left.left with right.right AND left.right with right.left recursively.",
        reveal: "Symmetric Tree - compare mirrored pairs! A beautiful recursive pattern!",
        starterCode: `function solve(tree) {
  // Return true if tree is symmetric around center
  
  return false;
}`,
        testCases: [
            { input: [{ val: 1, left: { val: 2, left: { val: 3, left: null, right: null }, right: null }, right: { val: 2, left: null, right: { val: 3, left: null, right: null } } }], expected: true },
            { input: [{ val: 1, left: { val: 2, left: null, right: { val: 3, left: null, right: null } }, right: { val: 2, left: null, right: { val: 3, left: null, right: null } } }], expected: false }
        ],
        xpReward: 120,
        isAdvanced: true
    },
    {
        id: "5.A.4",
        world: 5,
        name: "Flatten Folders",
        desc: "🔓 ADVANCED: Convert tree to list.",
        mission: "Flatten a folder tree into a linked list in pre-order. Each node's right should point to next in pre-order, left should be null.",
        hint: "Process right first (save it), then left. Connect current to flattened left, then to flattened right.",
        reveal: "Flatten Tree - pre-order rewiring! A tricky but elegant transformation!",
        starterCode: `function solve(tree) {
  // Flatten tree in-place to right-leaning list
  // Return array of values in order
  
  return [];
}`,
        testCases: [
            { input: [{ val: 1, left: { val: 2, left: { val: 3, left: null, right: null }, right: null }, right: { val: 4, left: null, right: null } }], expected: [1, 2, 3, 4] },
            { input: [{ val: 1, left: null, right: null }], expected: [1] }
        ],
        xpReward: 140,
        isAdvanced: true
    },
    {
        id: "5.A.5",
        world: 5,
        name: "Path Sum Target",
        desc: "🔓 ADVANCED: Find path to target.",
        mission: "Check if there's a root-to-leaf path where folder names (numbers) sum to a target. You must end at a leaf (no children)!",
        hint: "Subtract current value from target. At leaf, check if remaining target is 0.",
        reveal: "Path Sum - track remaining target! Base case is reaching a leaf with 0 remaining!",
        starterCode: `function solve(tree, target) {
  // Return true if any root-to-leaf path sums to target
  
  return false;
}`,
        testCases: [
            { input: [{ val: 5, left: { val: 4, left: { val: 1, left: null, right: null }, right: null }, right: { val: 8, left: null, right: null } }, 10], expected: true },
            { input: [{ val: 1, left: { val: 2, left: null, right: null }, right: null }, 1], expected: false }
        ],
        xpReward: 130,
        isAdvanced: true
    },
    {
        id: "5.A.6",
        world: 5,
        name: "Advanced Files Master",
        desc: "🏆 SUB-BOSS: All advanced tree patterns.",
        mission: "Master advanced tree operations! Return: 1) Is tree a valid BST, 2) Is tree symmetric, 3) Does any root-to-leaf path sum to target.",
        hint: "Combine BST validation, symmetry check, and path sum!",
        reveal: "You've conquered ADVANCED TREES - structured data mastery achieved!",
        starterCode: `function solve(bstTree, symTree, pathTree, target) {
  // Return: {
  //   isValidBST: true if bstTree is valid BST
  //   isSymmetric: true if symTree is symmetric
  //   hasPathSum: true if pathTree has root-to-leaf sum = target
  // }
  
  return {
    isValidBST: false,
    isSymmetric: false,
    hasPathSum: false
  };
}`,
        testCases: [
            {
                input: [
                    { val: 2, left: { val: 1, left: null, right: null }, right: { val: 3, left: null, right: null } },
                    { val: 1, left: { val: 2, left: null, right: null }, right: { val: 2, left: null, right: null } },
                    { val: 5, left: { val: 3, left: null, right: null }, right: null },
                    8
                ],
                expected: { isValidBST: true, isSymmetric: true, hasPathSum: true }
            }
        ],
        xpReward: 250,
        isBoss: true,
        isAdvanced: true
    },

    // ==================== WORLD 6: CITY TRANSIT ====================
    {
        id: "6.1",
        world: 6,
        name: "Metro Stations",
        desc: "List all stations.",
        mission: "Given a metro map (object), return all station names.",
        hint: "Get all the keys from the object.",
        reveal: "Graph nodes can be stored as object keys!",
        starterCode: `function solve(metro) {
  // metro = {stationA: [...neighbors], stationB: [...]}
  // Return array of all station names
  
  return [];
}`,
        testCases: [
            { input: [{ A: ['B'], B: ['A', 'C'], C: ['B'] }], expected: ['A', 'B', 'C'] }
        ],
        xpReward: 50
    },
    {
        id: "6.2",
        world: 6,
        name: "Connections",
        desc: "Find neighbors.",
        mission: "Return all stations directly connected to the given station.",
        hint: "Look up the station in the metro object.",
        reveal: "Adjacency list lookup is O(1)!",
        starterCode: `function solve(metro, station) {
  // Return array of connected stations
  
  return [];
}`,
        testCases: [
            { input: [{ A: ['B', 'C'], B: ['A'], C: ['A'] }, 'A'], expected: ['B', 'C'] },
            { input: [{ X: [] }, 'X'], expected: [] }
        ],
        xpReward: 50
    },
    {
        id: "6.3",
        world: 6,
        name: "Route Exists",
        desc: "Can you get there?",
        mission: "Check if there's ANY path from start to end station.",
        hint: "Track visited stations. Explore neighbors recursively.",
        reveal: "You used DFS for graph traversal!",
        starterCode: `function solve(metro, start, end) {
  // Return true if path exists
  
  return false;
}`,
        testCases: [
            { input: [{ A: ['B'], B: ['C'], C: [] }, 'A', 'C'], expected: true },
            { input: [{ A: ['B'], B: [], C: [] }, 'A', 'C'], expected: false }
        ],
        xpReward: 100
    },
    {
        id: "6.4",
        world: 6,
        name: "Shortest Path",
        desc: "Fewest stops.",
        mission: "Return the minimum number of stops from start to end. Return -1 if no path.",
        hint: "Use a queue. Process level by level.",
        reveal: "BFS finds shortest path in unweighted graphs!",
        starterCode: `function solve(metro, start, end) {
  // Return minimum stops (0 if same station)
  // Return -1 if no path
  
  return -1;
}`,
        testCases: [
            { input: [{ A: ['B', 'C'], B: ['A', 'D'], C: ['A'], D: ['B'] }, 'A', 'D'], expected: 2 },
            { input: [{ A: ['B'], B: [], C: [] }, 'A', 'C'], expected: -1 }
        ],
        xpReward: 120
    },
    {
        id: "6.5",
        world: 6,
        name: "All Reachable",
        desc: "Where can you go?",
        mission: "Return all stations reachable from the start station.",
        hint: "Visit all connected stations, tracking what you've seen.",
        reveal: "Full graph traversal visits all reachable nodes!",
        starterCode: `function solve(metro, start) {
  // Return array of all reachable stations (including start)
  
  return [];
}`,
        testCases: [
            { input: [{ A: ['B'], B: ['C'], C: [], D: [] }, 'A'], expected: ['A', 'B', 'C'] }
        ],
        xpReward: 90
    },
    {
        id: "6.6",
        world: 6,
        name: "Cycle Check",
        desc: "Circular routes?",
        mission: "Check if the metro has any circular route (cycle).",
        hint: "If you visit a station you've seen before, there's a cycle.",
        reveal: "Cycle detection is crucial for graph problems!",
        starterCode: `function solve(metro) {
  // Return true if any cycle exists
  
  return false;
}`,
        testCases: [
            { input: [{ A: ['B'], B: ['C'], C: ['A'] }], expected: true },
            { input: [{ A: ['B'], B: ['C'], C: [] }], expected: false }
        ],
        xpReward: 100
    },
    {
        id: "6.7",
        world: 6,
        name: "Count Components",
        desc: "Separate networks?",
        mission: "Return how many separate (disconnected) networks exist.",
        hint: "Count how many times you need to start a new traversal.",
        reveal: "Connected components partition the graph!",
        starterCode: `function solve(metro) {
  // Return number of separate networks
  
  return 0;
}`,
        testCases: [
            { input: [{ A: ['B'], B: ['A'], C: ['D'], D: ['C'], E: [] }], expected: 3 }
        ],
        xpReward: 100
    },
    {
        id: "6.8",
        world: 6,
        name: "Transit App",
        desc: "🏆 BOSS: Full navigation",
        mission: "Return {allStations, reachableFrom, shortestPath, hasCycle}",
        hint: "Combine listing, traversal, BFS, and cycle detection.",
        reveal: "You've mastered GRAPHS!",
        starterCode: `function solve(metro, from, to) {
  // Return: {
  //   allStations: list of all stations
  //   reachableFrom: stations reachable from 'from'
  //   shortestPath: min stops from 'from' to 'to'
  //   hasCycle: does graph have cycle
  // }
  
  return {
    allStations: [],
    reachableFrom: [],
    shortestPath: -1,
    hasCycle: false
  };
}`,
        testCases: [
            {
                input: [{ A: ['B'], B: ['A', 'C'], C: ['B'] }, 'A', 'C'],
                expected: { allStations: ['A', 'B', 'C'], reachableFrom: ['A', 'B', 'C'], shortestPath: 2, hasCycle: true }
            }
        ],
        xpReward: 220,
        isBoss: true
    },

    // ==================== WORLD 6.A: METRO EXPANSION (SUBLEVELS) ====================
    {
        id: "6.A.1",
        world: 6,
        name: "Clone Network",
        desc: "🔓 ADVANCED: Deep copy a graph.",
        mission: "Create an exact copy of the metro network. Each node in the new graph should be a NEW object with the same connections as the original. This is the Clone Graph problem!",
        hint: "Use a hash map to track old node -> new node mapping. DFS or BFS to traverse and clone.",
        reveal: "Clone Graph - DFS + hash map! Track visited with the mapping itself!",
        starterCode: `function solve(graph) {
  // graph = { val, neighbors: [...] }
  // Return a deep clone of the graph
  // Return array of all cloned node values
  
  return [];
}`,
        testCases: [
            { input: [{ val: 1, neighbors: [{ val: 2, neighbors: [] }, { val: 3, neighbors: [] }] }], expected: [1, 2, 3] },
            { input: [{ val: 1, neighbors: [] }], expected: [1] }
        ],
        xpReward: 150,
        isAdvanced: true
    },
    {
        id: "6.A.2",
        world: 6,
        name: "Count Districts",
        desc: "🔓 ADVANCED: Number of islands.",
        mission: "A city grid has land (1) and water (0). Count the number of islands (connected land regions). You can move up/down/left/right. This is the famous Number of Islands!",
        hint: "DFS/BFS from each unvisited land cell. Mark visited cells. Count how many times you start a new search.",
        reveal: "Number of Islands - flood fill! Each DFS start is a new island!",
        starterCode: `function solve(grid) {
  // grid = 2D array of 0s and 1s
  // Return count of distinct islands
  
  return 0;
}`,
        testCases: [
            { input: [[['1', '1', '0', '0'], ['1', '1', '0', '0'], ['0', '0', '1', '0'], ['0', '0', '0', '1']]], expected: 3 },
            { input: [[['1', '0', '1'], ['0', '0', '0'], ['1', '0', '1']]], expected: 4 }
        ],
        xpReward: 140,
        isAdvanced: true
    },
    {
        id: "6.A.3",
        world: 6,
        name: "Build Order",
        desc: "🔓 ADVANCED: Topological sort.",
        mission: "Build a metro system with dependencies! Given stations and prerequisites [a, b] (a must be built before b), return a valid build order. Return [] if impossible (cycle exists).",
        hint: "Kahn's algorithm: start with nodes having no incoming edges. Remove edges, add new zero-indegree nodes.",
        reveal: "Topological Sort - process zero-indegree nodes! Works only on DAGs!",
        starterCode: `function solve(numStations, prerequisites) {
  // prerequisites = [[before, after], ...]
  // Return valid build order, or [] if impossible
  
  return [];
}`,
        testCases: [
            { input: [4, [[1, 0], [2, 0], [3, 1], [3, 2]]], expected: [0, 1, 2, 3] },
            { input: [2, [[1, 0], [0, 1]]], expected: [] }
        ],
        xpReward: 160,
        isAdvanced: true
    },
    {
        id: "6.A.4",
        world: 6,
        name: "Cycle Detector",
        desc: "🔓 ADVANCED: Find if cycle exists.",
        mission: "Detect if the metro network contains a cycle. In a directed graph, can you start from a node and return to it? This prevents infinite loops in routing!",
        hint: "Track three states: unvisited, visiting, visited. Cycle exists if you reach a 'visiting' node.",
        reveal: "Cycle Detection - three-color DFS! Gray nodes in current path mean cycle!",
        starterCode: `function solve(graph) {
  // graph = { node: [neighbors], ... }
  // Return true if cycle exists
  
  return false;
}`,
        testCases: [
            { input: [{ 0: [1], 1: [2], 2: [0] }], expected: true },
            { input: [{ 0: [1], 1: [2], 2: [] }], expected: false }
        ],
        xpReward: 140,
        isAdvanced: true
    },
    {
        id: "6.A.5",
        world: 6,
        name: "Network Clusters",
        desc: "🔓 ADVANCED: Count connected components.",
        mission: "How many separate metro networks exist? Given N stations and connections, count the number of connected components (groups of stations that can reach each other).",
        hint: "DFS/BFS from each unvisited node. Each new search start is a new component. Or use Union-Find!",
        reveal: "Connected Components - count DFS/BFS starts! Union-Find is another approach!",
        starterCode: `function solve(n, connections) {
  // n stations (0 to n-1)
  // connections = [[a, b], ...] bidirectional
  // Return number of separate networks
  
  return 0;
}`,
        testCases: [
            { input: [5, [[0, 1], [1, 2], [3, 4]]], expected: 2 },
            { input: [4, [[0, 1], [2, 3], [1, 2]]], expected: 1 }
        ],
        xpReward: 130,
        isAdvanced: true
    },
    {
        id: "6.A.6",
        world: 6,
        name: "Advanced Metro Master",
        desc: "🏆 SUB-BOSS: All advanced graph patterns.",
        mission: "Master advanced graph operations! Return: 1) Number of islands in grid, 2) Whether cycle exists in graph, 3) Number of connected components.",
        hint: "Combine flood fill, cycle detection, and component counting!",
        reveal: "You've conquered ADVANCED GRAPHS - network mastery achieved!",
        starterCode: `function solve(grid, directedGraph, n, connections) {
  // Return: {
  //   islandCount: number of islands in grid
  //   hasCycle: true if directedGraph has cycle
  //   componentCount: number of components in undirected graph
  // }
  
  return {
    islandCount: 0,
    hasCycle: false,
    componentCount: 0
  };
}`,
        testCases: [
            {
                input: [
                    [['1', '0'], ['0', '1']],
                    { 0: [1], 1: [] },
                    3,
                    [[0, 1]]
                ],
                expected: { islandCount: 2, hasCycle: false, componentCount: 2 }
            }
        ],
        xpReward: 250,
        isBoss: true,
        isAdvanced: true
    },

    // ==================== WORLD 7: SOCIAL NETWORK ====================
    {
        id: "7.1",
        world: 7,
        name: "User Lookup",
        desc: "Find user by ID.",
        mission: "Given users object, return the user with the given ID.",
        hint: "Direct key access in an object.",
        reveal: "Hash tables give O(1) lookup by key!",
        starterCode: `function solve(users, id) {
  // users = {id: userData, ...}
  // Return user data or null
  
  return null;
}`,
        testCases: [
            { input: [{ u1: { name: 'Alice' }, u2: { name: 'Bob' } }, 'u1'], expected: { name: 'Alice' } },
            { input: [{}, 'u1'], expected: null }
        ],
        xpReward: 50
    },
    {
        id: "7.2",
        world: 7,
        name: "Duplicate Posts",
        desc: "Detect reposts.",
        mission: "Return true if any post ID appears more than once.",
        hint: "Track what you've seen using a Set.",
        reveal: "Sets detect duplicates in O(n)!",
        starterCode: `function solve(postIds) {
  // Return true if any duplicate exists
  
  return false;
}`,
        testCases: [
            { input: [[1, 2, 3, 2, 4]], expected: true },
            { input: [[1, 2, 3, 4]], expected: false }
        ],
        xpReward: 60
    },
    {
        id: "7.3",
        world: 7,
        name: "Word Counter",
        desc: "Count word frequency.",
        mission: "Return an object with each word and its count.",
        hint: "Use an object to track counts.",
        reveal: "Frequency counting with hash maps!",
        starterCode: `function solve(words) {
  // Return {word: count, ...}
  
  return {};
}`,
        testCases: [
            { input: [['a', 'b', 'a', 'c', 'a']], expected: { a: 3, b: 1, c: 1 } }
        ],
        xpReward: 70
    },
    {
        id: "7.4",
        world: 7,
        name: "Find Pair",
        desc: "Two numbers that sum.",
        mission: "Find two numbers in the array that add up to target. Return their indices.",
        hint: "For each number, check if (target - number) exists.",
        reveal: "Two-sum is a classic hash table problem!",
        starterCode: `function solve(nums, target) {
  // Return [i, j] where nums[i] + nums[j] = target
  // Return [] if not found
  
  return [];
}`,
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[3, 3], 6], expected: [0, 1] },
            { input: [[1, 2, 3], 10], expected: [] }
        ],
        xpReward: 100
    },
    {
        id: "7.5",
        world: 7,
        name: "Group Anagrams",
        desc: "Group similar words.",
        mission: "Group words that are anagrams of each other.",
        hint: "Sort each word's letters to create a key.",
        reveal: "Hash grouping by computed key!",
        starterCode: `function solve(words) {
  // Return array of groups
  // e.g., [['eat', 'tea', 'ate'], ['tan', 'nat']]
  
  return [];
}`,
        testCases: [
            { input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']], expected: [['eat', 'tea', 'ate'], ['tan', 'nat'], ['bat']] }
        ],
        xpReward: 110
    },
    {
        id: "7.6",
        world: 7,
        name: "First Unique",
        desc: "First non-repeating.",
        mission: "Return the first character that doesn't repeat.",
        hint: "Count all characters first, then find first with count 1.",
        reveal: "Two-pass with frequency map!",
        starterCode: `function solve(str) {
  // Return first non-repeating char or null
  
  return null;
}`,
        testCases: [
            { input: ['leetcode'], expected: 'l' },
            { input: ['aabb'], expected: null }
        ],
        xpReward: 80
    },
    {
        id: "7.7",
        world: 7,
        name: "LRU Cache",
        desc: "Recent items cache.",
        mission: "Implement a cache that removes least recently used item when full.",
        hint: "Track order of access. Remove oldest when capacity exceeded.",
        reveal: "LRU Cache is a fundamental system design pattern!",
        starterCode: `function solve(capacity, operations) {
  // operations = [{type: 'get'|'put', key, value}]
  // Return array of get results (-1 if not found)
  
  let cache = {};
  let results = [];
  
  // Implement LRU logic
  
  return results;
}`,
        testCases: [
            { input: [2, [{ type: 'put', key: 1, value: 1 }, { type: 'put', key: 2, value: 2 }, { type: 'get', key: 1 }, { type: 'put', key: 3, value: 3 }, { type: 'get', key: 2 }]], expected: [1, -1] }
        ],
        xpReward: 130
    },
    {
        id: "7.8",
        world: 7,
        name: "Feed Algorithm",
        desc: "🏆 BOSS: Smart ranking",
        mission: "Return {userExists, hasDuplicates, wordCounts, twoSumIndices}",
        hint: "Combine lookup, duplicate detection, counting, and two-sum.",
        reveal: "You've mastered HASH TABLES!",
        starterCode: `function solve(users, userId, posts, words, nums, target) {
  // Return: {
  //   userExists: is userId in users?
  //   hasDuplicates: any duplicate posts?
  //   wordCounts: frequency of each word
  //   twoSumIndices: indices that sum to target
  // }
  
  return {
    userExists: false,
    hasDuplicates: false,
    wordCounts: {},
    twoSumIndices: []
  };
}`,
        testCases: [
            {
                input: [{ u1: { name: 'A' } }, 'u1', [1, 2, 2], ['a', 'b', 'a'], [2, 7, 11], 9],
                expected: { userExists: true, hasDuplicates: true, wordCounts: { a: 2, b: 1 }, twoSumIndices: [0, 1] }
            }
        ],
        xpReward: 200,
        isBoss: true
    },

    // ==================== WORLD 8: GAME ECONOMY ====================
    {
        id: "8.1",
        world: 8,
        name: "Coin Change",
        desc: "Make exact amount.",
        mission: "Given coin denominations, return minimum coins needed to make the amount. Return -1 if impossible.",
        hint: "For each amount, try using each coin and pick minimum.",
        reveal: "Classic DP - optimal substructure!",
        starterCode: `function solve(coins, amount) {
  // Return minimum coins needed, or -1
  
  return -1;
}`,
        testCases: [
            { input: [[1, 2, 5], 11], expected: 3 },
            { input: [[2], 3], expected: -1 },
            { input: [[1], 0], expected: 0 }
        ],
        xpReward: 120
    },
    {
        id: "8.2",
        world: 8,
        name: "Climbing Stairs",
        desc: "Ways to reach top.",
        mission: "You can climb 1 or 2 steps at a time. How many ways to reach step N?",
        hint: "Ways(n) = Ways(n-1) + Ways(n-2)",
        reveal: "Fibonacci pattern - overlapping subproblems!",
        starterCode: `function solve(n) {
  // Return number of ways to climb n steps
  
  return 0;
}`,
        testCases: [
            { input: [2], expected: 2 },
            { input: [3], expected: 3 },
            { input: [5], expected: 8 }
        ],
        xpReward: 80
    },
    {
        id: "8.3",
        world: 8,
        name: "Max Loot",
        desc: "Rob houses wisely.",
        mission: "Can't rob adjacent houses. Return maximum loot possible.",
        hint: "For each house: max of (skip it, or take it + skip previous).",
        reveal: "Non-adjacent selection DP!",
        starterCode: `function solve(houses) {
  // Return maximum loot
  
  return 0;
}`,
        testCases: [
            { input: [[1, 2, 3, 1]], expected: 4 },
            { input: [[2, 7, 9, 3, 1]], expected: 12 }
        ],
        xpReward: 100
    },
    {
        id: "8.4",
        world: 8,
        name: "Grid Paths",
        desc: "Ways through grid.",
        mission: "Count paths from top-left to bottom-right. Can only move right or down.",
        hint: "Paths to cell = paths from above + paths from left.",
        reveal: "2D DP on grids!",
        starterCode: `function solve(m, n) {
  // Return number of paths in m x n grid
  
  return 0;
}`,
        testCases: [
            { input: [3, 3], expected: 6 },
            { input: [3, 2], expected: 3 },
            { input: [1, 1], expected: 1 }
        ],
        xpReward: 90
    },
    {
        id: "8.5",
        world: 8,
        name: "Best Trade",
        desc: "Buy low, sell high.",
        mission: "Given daily prices, return max profit from one buy and one sell.",
        hint: "Track minimum price so far, calculate profit at each day.",
        reveal: "One-pass optimization with state tracking!",
        starterCode: `function solve(prices) {
  // Return maximum profit
  
  return 0;
}`,
        testCases: [
            { input: [[7, 1, 5, 3, 6, 4]], expected: 5 },
            { input: [[7, 6, 4, 3, 1]], expected: 0 }
        ],
        xpReward: 90
    },
    {
        id: "8.6",
        world: 8,
        name: "Longest Streak",
        desc: "Increasing sequence.",
        mission: "Return length of longest strictly increasing subsequence.",
        hint: "For each element, find longest sequence ending before it that's smaller.",
        reveal: "LIS - a famous DP problem!",
        starterCode: `function solve(nums) {
  // Return length of longest increasing subsequence
  
  return 0;
}`,
        testCases: [
            { input: [[10, 9, 2, 5, 3, 7, 101, 18]], expected: 4 },
            { input: [[0, 1, 0, 3, 2, 3]], expected: 4 }
        ],
        xpReward: 120
    },
    {
        id: "8.7",
        world: 8,
        name: "Word Break",
        desc: "Can you spell it?",
        mission: "Check if string can be segmented into dictionary words.",
        hint: "Try each prefix that's a valid word, then check the rest.",
        reveal: "String segmentation DP!",
        starterCode: `function solve(s, wordDict) {
  // Return true if s can be segmented
  
  return false;
}`,
        testCases: [
            { input: ['leetcode', ['leet', 'code']], expected: true },
            { input: ['applepenapple', ['apple', 'pen']], expected: true },
            { input: ['catsandog', ['cats', 'dog', 'sand', 'and', 'cat']], expected: false }
        ],
        xpReward: 120
    },
    {
        id: "8.8",
        world: 8,
        name: "Game Master",
        desc: "🏆 BOSS: Optimal choices",
        mission: "Return {minCoins, climbWays, maxProfit, longestIncreasing}",
        hint: "Combine coin change, climbing stairs, trading, and LIS.",
        reveal: "You've mastered DYNAMIC PROGRAMMING!",
        starterCode: `function solve(coins, amount, stairs, prices, sequence) {
  // Return: {
  //   minCoins: for amount using coins
  //   climbWays: ways to climb stairs
  //   maxProfit: best trade profit
  //   longestIncreasing: LIS length
  // }
  
  return {
    minCoins: 0,
    climbWays: 0,
    maxProfit: 0,
    longestIncreasing: 0
  };
}`,
        testCases: [
            {
                input: [[1, 2, 5], 11, 5, [7, 1, 5, 3, 6, 4], [10, 9, 2, 5, 3, 7, 101, 18]],
                expected: { minCoins: 3, climbWays: 8, maxProfit: 5, longestIncreasing: 4 }
            }
        ],
        xpReward: 250,
        isBoss: true
    },

    // ==================== WORLD 9: MIRROR WORLD (RECURSION) ====================
    {
        id: "9.1",
        world: 9,
        name: "Countdown",
        desc: "Count down to zero.",
        mission: "Given a number n, return an array counting down from n to 1. Use recursion!",
        hint: "Base case: n <= 0 returns []. Recursive: [n] + countdown(n-1)",
        reveal: "You learned the basic RECURSIVE pattern: base case + recursive call!",
        starterCode: `function solve(n) {
  // Return [n, n-1, n-2, ..., 1]
  // Use recursion, not loops!
  
  return [];
}`,
        testCases: [
            { input: [5], expected: [5, 4, 3, 2, 1] },
            { input: [3], expected: [3, 2, 1] },
            { input: [1], expected: [1] }
        ],
        xpReward: 70
    },
    {
        id: "9.2",
        world: 9,
        name: "Sum It Up",
        desc: "Sum all numbers recursively.",
        mission: "Return the sum of an array using recursion. No loops allowed!",
        hint: "sum([a, b, c]) = a + sum([b, c])",
        reveal: "Recursive array processing - break into head + tail!",
        starterCode: `function solve(arr) {
  // Sum all elements recursively
  
  return 0;
}`,
        testCases: [
            { input: [[1, 2, 3, 4, 5]], expected: 15 },
            { input: [[10]], expected: 10 },
            { input: [[]], expected: 0 }
        ],
        xpReward: 80
    },
    {
        id: "9.3",
        world: 9,
        name: "Factorial",
        desc: "Classic recursion problem.",
        mission: "Calculate n! (n factorial) using recursion. n! = n × (n-1) × ... × 1",
        hint: "factorial(n) = n * factorial(n-1), factorial(0) = 1",
        reveal: "The classic recursive definition - each step depends on the previous!",
        starterCode: `function solve(n) {
  // Return n! (factorial)
  
  return 1;
}`,
        testCases: [
            { input: [5], expected: 120 },
            { input: [3], expected: 6 },
            { input: [0], expected: 1 }
        ],
        xpReward: 80
    },
    {
        id: "9.4",
        world: 9,
        name: "Fibonacci",
        desc: "The famous sequence.",
        mission: "Return the nth Fibonacci number. F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)",
        hint: "Two base cases, then add the two previous values.",
        reveal: "Fibonacci shows recursive tree structure - but beware of exponential time!",
        starterCode: `function solve(n) {
  // Return nth Fibonacci number
  
  return 0;
}`,
        testCases: [
            { input: [6], expected: 8 },
            { input: [10], expected: 55 },
            { input: [0], expected: 0 }
        ],
        xpReward: 90
    },
    {
        id: "9.5",
        world: 9,
        name: "Power Up",
        desc: "Calculate exponents.",
        mission: "Calculate base^exp using recursion. No Math.pow allowed!",
        hint: "power(b, e) = b * power(b, e-1), power(b, 0) = 1",
        reveal: "Recursive exponentiation - can be optimized with fast exponentiation!",
        starterCode: `function solve(base, exp) {
  // Return base^exp
  
  return 1;
}`,
        testCases: [
            { input: [2, 10], expected: 1024 },
            { input: [3, 4], expected: 81 },
            { input: [5, 0], expected: 1 }
        ],
        xpReward: 80
    },
    {
        id: "9.6",
        world: 9,
        name: "Reverse String",
        desc: "Flip it recursively.",
        mission: "Reverse a string using recursion. No loops or built-in reverse!",
        hint: "reverse('abc') = reverse('bc') + 'a'",
        reveal: "String recursion - process last + recurse on rest!",
        starterCode: `function solve(str) {
  // Reverse the string recursively
  
  return '';
}`,
        testCases: [
            { input: ['hello'], expected: 'olleh' },
            { input: ['ab'], expected: 'ba' },
            { input: ['a'], expected: 'a' }
        ],
        xpReward: 70
    },
    {
        id: "9.7",
        world: 9,
        name: "Palindrome Check",
        desc: "Same forwards and back?",
        mission: "Check if a string is a palindrome using recursion.",
        hint: "Compare first and last, then check the middle part.",
        reveal: "Recursive shrinking - eliminate from both ends!",
        starterCode: `function solve(str) {
  // Return true if palindrome
  
  return false;
}`,
        testCases: [
            { input: ['racecar'], expected: true },
            { input: ['hello'], expected: false },
            { input: ['a'], expected: true }
        ],
        xpReward: 90
    },
    {
        id: "9.8",
        world: 9,
        name: "Recursion Master",
        desc: "🏆 BOSS: All recursive patterns",
        mission: "Return {factorial, fib, reversed, isPalindrome}",
        hint: "Combine all your recursive skills.",
        reveal: "You've mastered RECURSION - thinking in self-similar patterns!",
        starterCode: `function solve(n, str) {
  // Return: {
  //   factorial: n!
  //   fib: nth fibonacci
  //   reversed: str reversed
  //   isPalindrome: is str a palindrome?
  // }
  
  return {
    factorial: 1,
    fib: 0,
    reversed: '',
    isPalindrome: false
  };
}`,
        testCases: [
            { input: [5, 'radar'], expected: { factorial: 120, fib: 5, reversed: 'radar', isPalindrome: true } }
        ],
        xpReward: 200,
        isBoss: true
    },

    // ==================== WORLD 10: PUZZLE MASTER (BACKTRACKING) ====================
    {
        id: "10.1",
        world: 10,
        name: "All Subsets",
        desc: "Generate all combinations.",
        mission: "Given an array, generate ALL possible subsets (power set).",
        hint: "For each element: either include it or don't. Branch into both.",
        reveal: "Power set generation - the foundation of backtracking!",
        starterCode: `function solve(nums) {
  // Return array of all subsets
  // e.g., [1,2] → [[], [1], [2], [1,2]]
  
  return [];
}`,
        testCases: [
            { input: [[1, 2]], expected: [[], [1], [2], [1, 2]] },
            { input: [[1]], expected: [[], [1]] }
        ],
        xpReward: 100
    },
    {
        id: "10.2",
        world: 10,
        name: "Permutations",
        desc: "All arrangements.",
        mission: "Generate all permutations of an array.",
        hint: "Fix first element, permute the rest. Swap and recurse.",
        reveal: "Permutation generation - explore all orderings!",
        starterCode: `function solve(nums) {
  // Return all permutations
  // e.g., [1,2] → [[1,2], [2,1]]
  
  return [];
}`,
        testCases: [
            { input: [[1, 2, 3]], expected: [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]] }
        ],
        xpReward: 120
    },
    {
        id: "10.3",
        world: 10,
        name: "Combination Sum",
        desc: "Find numbers that add up.",
        mission: "Find all combinations that sum to target. Can reuse numbers.",
        hint: "Try adding each number, recurse with remaining target.",
        reveal: "Combination with repetition - classic backtracking!",
        starterCode: `function solve(candidates, target) {
  // Return all combinations summing to target
  
  return [];
}`,
        testCases: [
            { input: [[2, 3, 6, 7], 7], expected: [[2, 2, 3], [7]] }
        ],
        xpReward: 130
    },
    {
        id: "10.4",
        world: 10,
        name: "Valid Parentheses",
        desc: "Generate all valid brackets.",
        mission: "Generate all valid combinations of n pairs of parentheses.",
        hint: "Track open and close counts. Only close if open > close.",
        reveal: "Constrained generation - only explore valid paths!",
        starterCode: `function solve(n) {
  // Return all valid parentheses strings
  // n=2 → ['(())', '()()']
  
  return [];
}`,
        testCases: [
            { input: [2], expected: ['(())', '()()'] },
            { input: [3], expected: ['((()))', '(()())', '(())()', '()(())', '()()()'] }
        ],
        xpReward: 120
    },
    {
        id: "10.5",
        world: 10,
        name: "Letter Combos",
        desc: "Phone number letters.",
        mission: "Given digits 2-9, return all letter combinations (like phone keypad).",
        hint: "Map each digit to letters. Take one from each, combine.",
        reveal: "Cartesian product via backtracking!",
        starterCode: `function solve(digits) {
  // 2='abc', 3='def', 4='ghi', 5='jkl'
  // 6='mno', 7='pqrs', 8='tuv', 9='wxyz'
  
  return [];
}`,
        testCases: [
            { input: ['23'], expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'] }
        ],
        xpReward: 110
    },
    {
        id: "10.6",
        world: 10,
        name: "Word Search",
        desc: "Find word in grid.",
        mission: "Check if a word exists in a 2D grid. Can move up/down/left/right.",
        hint: "DFS from each cell. Mark visited, backtrack if stuck.",
        reveal: "Grid backtracking - mark and unmark as you explore!",
        starterCode: `function solve(board, word) {
  // Return true if word exists in grid
  
  return false;
}`,
        testCases: [
            { input: [[['A', 'B'], ['C', 'D']], 'ABDC'], expected: true },
            { input: [[['A', 'B'], ['C', 'D']], 'ABCD'], expected: false }
        ],
        xpReward: 140
    },
    {
        id: "10.7",
        world: 10,
        name: "N-Queens",
        desc: "Classic puzzle.",
        mission: "Count ways to place N queens on NxN board so none attack each other.",
        hint: "Place row by row. Check column and diagonal conflicts.",
        reveal: "The famous N-Queens - constrained backtracking!",
        starterCode: `function solve(n) {
  // Return count of valid arrangements
  
  return 0;
}`,
        testCases: [
            { input: [4], expected: 2 },
            { input: [1], expected: 1 }
        ],
        xpReward: 150
    },
    {
        id: "10.8",
        world: 10,
        name: "Puzzle Master",
        desc: "🏆 BOSS: All backtracking",
        mission: "Return {subsetCount, permCount, validParens}",
        hint: "Combine subsets, permutations, and parentheses generation.",
        reveal: "You've mastered BACKTRACKING - systematic exploration!",
        starterCode: `function solve(nums, n) {
  // Return: {
  //   subsetCount: number of subsets of nums
  //   permCount: number of permutations of nums  
  //   validParens: all valid n-pair parentheses
  // }
  
  return {
    subsetCount: 0,
    permCount: 0,
    validParens: []
  };
}`,
        testCases: [
            { input: [[1, 2, 3], 2], expected: { subsetCount: 8, permCount: 6, validParens: ['(())', '()()'] } }
        ],
        xpReward: 220,
        isBoss: true
    },

    // ==================== WORLD 11: BINARY LAB (BIT MANIPULATION) ====================
    {
        id: "11.1",
        world: 11,
        name: "Is Even?",
        desc: "Check parity with bits.",
        mission: "Check if a number is even using bit operations. No modulo!",
        hint: "The last bit of even numbers is always 0. Use AND.",
        reveal: "n & 1 tells you the last bit - 0 means even!",
        starterCode: `function solve(n) {
  // Return true if n is even
  // Use bit operations, not modulo!
  
  return false;
}`,
        testCases: [
            { input: [4], expected: true },
            { input: [7], expected: false },
            { input: [0], expected: true }
        ],
        xpReward: 60
    },
    {
        id: "11.2",
        world: 11,
        name: "Power of Two",
        desc: "Is it 2^n?",
        mission: "Check if a number is a power of 2 using bit operations.",
        hint: "Powers of 2 have exactly one bit set. n & (n-1) == 0",
        reveal: "The classic bit trick: n & (n-1) clears the lowest set bit!",
        starterCode: `function solve(n) {
  // Return true if n is power of 2
  
  return false;
}`,
        testCases: [
            { input: [16], expected: true },
            { input: [18], expected: false },
            { input: [1], expected: true }
        ],
        xpReward: 80
    },
    {
        id: "11.3",
        world: 11,
        name: "Count Bits",
        desc: "How many 1s?",
        mission: "Count the number of 1 bits in a number (population count).",
        hint: "Keep removing the lowest bit with n & (n-1).",
        reveal: "Brian Kernighan's algorithm - count bits in O(number of 1s)!",
        starterCode: `function solve(n) {
  // Return count of 1 bits
  
  return 0;
}`,
        testCases: [
            { input: [7], expected: 3 },
            { input: [16], expected: 1 },
            { input: [255], expected: 8 }
        ],
        xpReward: 80
    },
    {
        id: "11.4",
        world: 11,
        name: "Single Number",
        desc: "Find the unique one.",
        mission: "Every number appears twice except one. Find it using XOR.",
        hint: "a ^ a = 0, a ^ 0 = a. XOR everything together.",
        reveal: "XOR magic - duplicates cancel out!",
        starterCode: `function solve(nums) {
  // Return the number that appears only once
  
  return 0;
}`,
        testCases: [
            { input: [[2, 2, 1]], expected: 1 },
            { input: [[4, 1, 2, 1, 2]], expected: 4 }
        ],
        xpReward: 90
    },
    {
        id: "11.5",
        world: 11,
        name: "Get Bit",
        desc: "Check specific bit.",
        mission: "Return true if the bit at position i is set (1).",
        hint: "Shift and mask: (n >> i) & 1",
        reveal: "Bit extraction - shift right, then mask with 1!",
        starterCode: `function solve(n, i) {
  // Return true if bit at position i is 1
  
  return false;
}`,
        testCases: [
            { input: [5, 0], expected: true },
            { input: [5, 1], expected: false },
            { input: [5, 2], expected: true }
        ],
        xpReward: 70
    },
    {
        id: "11.6",
        world: 11,
        name: "Set Bit",
        desc: "Turn on a bit.",
        mission: "Set (turn on) the bit at position i.",
        hint: "Use OR with a mask: n | (1 << i)",
        reveal: "Bit setting - OR with a shifted 1!",
        starterCode: `function solve(n, i) {
  // Return n with bit i set to 1
  
  return 0;
}`,
        testCases: [
            { input: [5, 1], expected: 7 },
            { input: [0, 3], expected: 8 }
        ],
        xpReward: 70
    },
    {
        id: "11.7",
        world: 11,
        name: "Swap Numbers",
        desc: "Swap without temp.",
        mission: "Swap two numbers using only XOR, no temporary variable.",
        hint: "a ^= b; b ^= a; a ^= b;",
        reveal: "XOR swap trick - a classic bit manipulation technique!",
        starterCode: `function solve(a, b) {
  // Return [b, a] using only XOR operations
  
  return [a, b];
}`,
        testCases: [
            { input: [5, 9], expected: [9, 5] },
            { input: [1, 2], expected: [2, 1] }
        ],
        xpReward: 80
    },
    {
        id: "11.8",
        world: 11,
        name: "Bit Master",
        desc: "🏆 BOSS: All bit operations",
        mission: "Return {isEven, isPowerOf2, bitCount, singleNum}",
        hint: "Combine all bit manipulation techniques.",
        reveal: "You've mastered BIT MANIPULATION - the lowest level of computing!",
        starterCode: `function solve(n, nums) {
  // Return: {
  //   isEven: is n even?
  //   isPowerOf2: is n a power of 2?
  //   bitCount: count of 1 bits in n
  //   singleNum: unique number in nums
  // }
  
  return {
    isEven: false,
    isPowerOf2: false,
    bitCount: 0,
    singleNum: 0
  };
}`,
        testCases: [
            { input: [16, [1, 2, 1]], expected: { isEven: true, isPowerOf2: true, bitCount: 1, singleNum: 2 } }
        ],
        xpReward: 200,
        isBoss: true
    },

    // ==================== WORLD 12: STRATEGY KINGDOM (GREEDY) ====================
    {
        id: "12.1",
        world: 12,
        name: "Coin Greedy",
        desc: "Minimum coins (greedy).",
        mission: "Given coin values and amount, return minimum coins using greedy (largest first).",
        hint: "Always pick the largest coin that fits.",
        reveal: "Greedy coin change - works for some denominations, not all!",
        starterCode: `function solve(coins, amount) {
  // Use largest coins first
  // Return count of coins used
  
  return 0;
}`,
        testCases: [
            { input: [[25, 10, 5, 1], 41], expected: 4 },
            { input: [[10, 5, 1], 27], expected: 5 }
        ],
        xpReward: 70
    },
    {
        id: "12.2",
        world: 12,
        name: "Activity Selection",
        desc: "Maximum activities.",
        mission: "Select maximum non-overlapping activities. Each has [start, end].",
        hint: "Sort by end time. Always pick earliest ending that doesn't conflict.",
        reveal: "Classic greedy scheduling - sort by end time!",
        starterCode: `function solve(activities) {
  // activities = [[start, end], ...]
  // Return maximum count of non-overlapping activities
  
  return 0;
}`,
        testCases: [
            { input: [[[1, 4], [3, 5], [0, 6], [5, 7], [8, 9], [5, 9]]], expected: 4 },
            { input: [[[1, 2], [2, 3], [3, 4]]], expected: 3 }
        ],
        xpReward: 100
    },
    {
        id: "12.3",
        world: 12,
        name: "Jump Game",
        desc: "Can you reach the end?",
        mission: "Each element is max jump length. Can you reach the last index?",
        hint: "Track the furthest you can reach at each step.",
        reveal: "Greedy reach tracking - always extend your maximum reach!",
        starterCode: `function solve(nums) {
  // Return true if you can reach the last index
  
  return false;
}`,
        testCases: [
            { input: [[2, 3, 1, 1, 4]], expected: true },
            { input: [[3, 2, 1, 0, 4]], expected: false }
        ],
        xpReward: 100
    },
    {
        id: "12.4",
        world: 12,
        name: "Assign Cookies",
        desc: "Maximize happy children.",
        mission: "Assign cookies to children. Child i needs greed[i] size. Cookie j has size[j].",
        hint: "Sort both. Match smallest cookie to smallest greed that it satisfies.",
        reveal: "Two-pointer greedy - match smallest to smallest!",
        starterCode: `function solve(greed, cookies) {
  // Return max number of content children
  
  return 0;
}`,
        testCases: [
            { input: [[1, 2, 3], [1, 1]], expected: 1 },
            { input: [[1, 2], [1, 2, 3]], expected: 2 }
        ],
        xpReward: 90
    },
    {
        id: "12.5",
        world: 12,
        name: "Gas Station",
        desc: "Complete the circuit.",
        mission: "Find starting station to complete circular route. gas[i] and cost[i] given.",
        hint: "If you can't reach station i from j, start from i+1.",
        reveal: "Greedy elimination - skip impossible starting points!",
        starterCode: `function solve(gas, cost) {
  // Return starting index, or -1 if impossible
  
  return -1;
}`,
        testCases: [
            { input: [[1, 2, 3, 4, 5], [3, 4, 5, 1, 2]], expected: 3 },
            { input: [[2, 3, 4], [3, 4, 3]], expected: -1 }
        ],
        xpReward: 120
    },
    {
        id: "12.6",
        world: 12,
        name: "Partition Labels",
        desc: "Max partitions.",
        mission: "Partition string so each letter appears in at most one part. Maximize parts.",
        hint: "Track last occurrence of each char. Extend partition if needed.",
        reveal: "Greedy partitioning - extend boundaries as needed!",
        starterCode: `function solve(s) {
  // Return array of partition sizes
  
  return [];
}`,
        testCases: [
            { input: ['ababcbacadefegdehijhklij'], expected: [9, 7, 8] }
        ],
        xpReward: 110
    },
    {
        id: "12.7",
        world: 12,
        name: "Meeting Rooms",
        desc: "Minimum rooms needed.",
        mission: "Given meeting times [start, end], return minimum rooms required.",
        hint: "Sort by start. Use a min-heap of end times.",
        reveal: "Greedy scheduling with resource counting!",
        starterCode: `function solve(intervals) {
  // Return minimum rooms needed
  
  return 0;
}`,
        testCases: [
            { input: [[[0, 30], [5, 10], [15, 20]]], expected: 2 },
            { input: [[[7, 10], [2, 4]]], expected: 1 }
        ],
        xpReward: 120
    },
    {
        id: "12.8",
        world: 12,
        name: "Strategy Master",
        desc: "🏆 BOSS: All greedy",
        mission: "Return {canJump, maxActivities, minRooms}",
        hint: "Combine jump game, activity selection, and meeting rooms.",
        reveal: "You've mastered GREEDY ALGORITHMS - optimal local choices!",
        starterCode: `function solve(jumps, activities, meetings) {
  // Return: {
  //   canJump: can reach end of jumps array?
  //   maxActivities: max non-overlapping activities
  //   minRooms: minimum meeting rooms needed
  // }
  
  return {
    canJump: false,
    maxActivities: 0,
    minRooms: 0
  };
}`,
        testCases: [
            { input: [[2, 3, 1, 1, 4], [[1, 2], [2, 3]], [[0, 30], [5, 10]]], expected: { canJump: true, maxActivities: 2, minRooms: 2 } }
        ],
        xpReward: 250,
        isBoss: true
    },

    // ==================== WORLD 13: E-COMMERCE PLATFORM (TWO POINTERS) ====================
    {
        id: "13.1",
        world: 13,
        name: "Product Filter",
        desc: "Filter products by price range.",
        mission: "Your e-commerce site needs lightning-fast filtering! Given a SORTED array of product prices and a budget range [min, max], return all products within that price range. The array is already sorted - use this to your advantage for O(n) performance!",
        hint: "Use two pointers: find where prices >= min starts, then collect until prices > max.",
        reveal: "Two pointers on sorted data lets you find ranges in O(n) - no nested loops needed!",
        starterCode: `function solve(prices, minBudget, maxBudget) {
  // prices is SORTED ascending
  // Return array of prices where minBudget <= price <= maxBudget
  
  return [];
}`,
        testCases: [
            { input: [[10, 20, 30, 40, 50], 15, 35], expected: [20, 30] },
            { input: [[5, 10, 15, 20, 25], 10, 20], expected: [10, 15, 20] },
            { input: [[100, 200, 300], 50, 150], expected: [100] }
        ],
        xpReward: 80
    },
    {
        id: "13.2",
        world: 13,
        name: "Remove Out of Stock",
        desc: "Clean inventory in-place.",
        mission: "Products with quantity 0 need to be removed from the display. Given an array of quantities, remove all zeros IN-PLACE and return the new length. Don't use extra space - modify the original array!",
        hint: "Use slow/fast pointers: fast scans ahead, slow marks where to place non-zero values.",
        reveal: "The slow/fast pointer pattern - one pointer reads, one writes. O(n) time, O(1) space!",
        starterCode: `function solve(quantities) {
  // Remove all 0s from quantities in-place
  // Return the new length (count of non-zero items)
  
  return 0;
}`,
        testCases: [
            { input: [[0, 1, 0, 3, 12]], expected: 3 },
            { input: [[0, 0, 0]], expected: 0 },
            { input: [[1, 2, 3]], expected: 3 }
        ],
        xpReward: 90
    },
    {
        id: "13.3",
        world: 13,
        name: "Shopping Cart Pairs",
        desc: "Find items matching budget.",
        mission: "A customer has a gift card! Given a SORTED list of product prices and a gift card value, find TWO products that exactly match the card amount. Return their indices [i, j].",
        hint: "Start pointers at both ends. If sum too big, decrease right. If too small, increase left.",
        reveal: "Two pointers from ends - the classic Two Sum on sorted arrays! O(n) vs O(n²)!",
        starterCode: `function solve(prices, giftCard) {
  // prices is SORTED
  // Find two prices that sum to giftCard
  // Return [index1, index2] or [] if not found
  
  return [];
}`,
        testCases: [
            { input: [[2, 7, 11, 15], 9], expected: [0, 1] },
            { input: [[1, 2, 3, 4, 5], 8], expected: [2, 4] },
            { input: [[1, 2, 3], 10], expected: [] }
        ],
        xpReward: 100
    },
    {
        id: "13.4",
        world: 13,
        name: "Price Bracket",
        desc: "Count products in range.",
        mission: "How many products fall within a price bracket? Given a SORTED price list, count how many products cost between minPrice and maxPrice (inclusive). Do it faster than checking every element!",
        hint: "Binary search to find the first valid price, then linear or another binary search for the end.",
        reveal: "Binary search + two pointers - find boundaries in O(log n), count in O(1)!",
        starterCode: `function solve(prices, minPrice, maxPrice) {
  // prices is SORTED
  // Return COUNT of prices in range [minPrice, maxPrice]
  
  return 0;
}`,
        testCases: [
            { input: [[10, 20, 30, 40, 50, 60], 25, 45], expected: 2 },
            { input: [[5, 10, 15, 20, 25, 30], 10, 25], expected: 4 },
            { input: [[100, 200, 300], 400, 500], expected: 0 }
        ],
        xpReward: 110
    },
    {
        id: "13.5",
        world: 13,
        name: "Bundle Deal",
        desc: "Find three items for bundle.",
        mission: "Create a bundle deal! Given SORTED product prices, find ALL unique combinations of 3 products that sum to the target bundle price. Return array of triplets [price1, price2, price3].",
        hint: "Fix one element, then use two pointers on the remaining array. Skip duplicates!",
        reveal: "3Sum problem - fix one, two-pointer the rest. O(n²) is optimal for this!",
        starterCode: `function solve(prices, bundleTarget) {
  // prices is SORTED
  // Find all unique triplets that sum to bundleTarget
  
  return [];
}`,
        testCases: [
            { input: [[-1, 0, 1, 2, -1, -4], 0], expected: [[-1, -1, 2], [-1, 0, 1]] },
            { input: [[1, 2, 3, 4, 5], 9], expected: [[1, 3, 5], [2, 3, 4]] }
        ],
        xpReward: 140
    },
    {
        id: "13.6",
        world: 13,
        name: "Merge Catalogs",
        desc: "Combine two sorted lists.",
        mission: "Two suppliers sent their product catalogs (both sorted by price). Merge them into one sorted catalog. Use the fact that both are already sorted!",
        hint: "Two pointers, one in each array. Always take the smaller element.",
        reveal: "Merge from Merge Sort - compare fronts, take smaller. O(n+m) time!",
        starterCode: `function solve(catalog1, catalog2) {
  // Both catalogs are SORTED
  // Return merged sorted catalog
  
  return [];
}`,
        testCases: [
            { input: [[1, 3, 5, 7], [2, 4, 6, 8]], expected: [1, 2, 3, 4, 5, 6, 7, 8] },
            { input: [[1, 2, 3], [4, 5, 6]], expected: [1, 2, 3, 4, 5, 6] },
            { input: [[], [1, 2, 3]], expected: [1, 2, 3] }
        ],
        xpReward: 90
    },
    {
        id: "13.7",
        world: 13,
        name: "Palindrome SKU",
        desc: "Validate product codes.",
        mission: "Product SKUs must be palindromes for special edition items. Check if a given SKU (string) reads the same forwards and backwards. Ignore case and non-alphanumeric characters.",
        hint: "Two pointers from ends, moving toward center. Skip non-alphanumeric chars.",
        reveal: "Two pointers meeting in middle - the classic palindrome check! O(n) time, O(1) space!",
        starterCode: `function solve(sku) {
  // Return true if sku is a palindrome
  // Ignore non-alphanumeric, case-insensitive
  
  return false;
}`,
        testCases: [
            { input: ["A man, a plan, a canal: Panama"], expected: true },
            { input: ["race a car"], expected: false },
            { input: ["Was it a car or a cat I saw"], expected: true }
        ],
        xpReward: 80
    },
    {
        id: "13.8",
        world: 13,
        name: "Container Loading",
        desc: "Maximize shipping capacity.",
        mission: "You have container walls of different heights. Find two walls that form a container holding the maximum water (products). The width is the distance between walls, height is the shorter wall.",
        hint: "Start at ends. Move the shorter wall inward - can't do worse, might do better!",
        reveal: "Container with Most Water - greedy two-pointer. Always move the limiting factor!",
        starterCode: `function solve(heights) {
  // heights[i] = height of wall at position i
  // Return maximum area between any two walls
  
  return 0;
}`,
        testCases: [
            { input: [[1, 8, 6, 2, 5, 4, 8, 3, 7]], expected: 49 },
            { input: [[1, 1]], expected: 1 },
            { input: [[4, 3, 2, 1, 4]], expected: 16 }
        ],
        xpReward: 130
    },
    {
        id: "13.9",
        world: 13,
        name: "Move Clearance",
        desc: "Organize sale items.",
        mission: "Move all clearance items (marked as 0) to the end of the inventory array. Keep the relative order of non-clearance items. Do it IN-PLACE with O(1) extra space!",
        hint: "Track where next non-zero should go. Swap elements into position.",
        reveal: "Partition pattern - similar to QuickSort partitioning. Stable version exists too!",
        starterCode: `function solve(inventory) {
  // Move all 0s to end, maintain relative order of others
  // Modify in-place, return the modified array
  
  return inventory;
}`,
        testCases: [
            { input: [[0, 1, 0, 3, 12]], expected: [1, 3, 12, 0, 0] },
            { input: [[0, 0, 1]], expected: [1, 0, 0] },
            { input: [[1, 2, 3]], expected: [1, 2, 3] }
        ],
        xpReward: 100
    },
    {
        id: "13.10",
        world: 13,
        name: "Stock Rebalance",
        desc: "Calculate overflow storage.",
        mission: "Your warehouse shelves have different heights. After a flood (orders), calculate how much excess inventory (water) is trapped between shelves. Each position can hold water up to the min of max heights on left and right.",
        hint: "Two pointers from ends. Track maxLeft and maxRight. Process the smaller side.",
        reveal: "Trapping Rain Water - the famous problem! Two pointers track boundaries. O(n) time!",
        starterCode: `function solve(shelves) {
  // shelves[i] = height of shelf at position i
  // Return total water/inventory trapped
  
  return 0;
}`,
        testCases: [
            { input: [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]], expected: 6 },
            { input: [[4, 2, 0, 3, 2, 5]], expected: 9 },
            { input: [[1, 2, 3, 4]], expected: 0 }
        ],
        xpReward: 150
    },
    {
        id: "13.11",
        world: 13,
        name: "Duplicate Detector",
        desc: "Find repeated order ID.",
        mission: "An array of order IDs from 1 to n appears n+1 times (one duplicate). Find the duplicate WITHOUT modifying the array and using only O(1) extra space. The duplicate can appear more than twice!",
        hint: "Treat values as 'next node pointers'. It's like finding a cycle in a linked list!",
        reveal: "Floyd's Cycle Detection (Tortoise and Hare) - brilliant use of two pointers!",
        starterCode: `function solve(orderIds) {
  // orderIds contains n+1 numbers in range [1, n]
  // Exactly one number is duplicated
  // Return the duplicate (O(1) space, don't modify array)
  
  return 0;
}`,
        testCases: [
            { input: [[1, 3, 4, 2, 2]], expected: 2 },
            { input: [[3, 1, 3, 4, 2]], expected: 3 },
            { input: [[1, 1]], expected: 1 }
        ],
        xpReward: 160
    },
    {
        id: "13.12",
        world: 13,
        name: "E-Commerce Master",
        desc: "🏆 BOSS: Complete shopping system",
        mission: "Build the ultimate e-commerce backend! Given products, a budget, and container heights, return: 1) Products in price range [min, max], 2) Two products summing to exact budget (indices), 3) Max container capacity from heights.",
        hint: "Combine price filtering, two-sum, and container problems - all two-pointer techniques!",
        reveal: "You've mastered TWO POINTERS - the art of efficient array traversal!",
        starterCode: `function solve(prices, minPrice, maxPrice, budget, containerHeights) {
  // prices is SORTED
  // Return: {
  //   inRange: products between minPrice and maxPrice
  //   budgetPair: [i, j] indices summing to budget
  //   maxContainer: max area from containerHeights
  // }
  
  return {
    inRange: [],
    budgetPair: [],
    maxContainer: 0
  };
}`,
        testCases: [
            {
                input: [[10, 20, 30, 40, 50], 15, 35, 50, [1, 8, 6, 2, 5, 4, 8, 3, 7]],
                expected: { inRange: [20, 30], budgetPair: [1, 2], maxContainer: 49 }
            }
        ],
        xpReward: 300,
        isBoss: true
    },

    // ==================== WORLD 14: STREAMING SERVICE (SLIDING WINDOW) ====================
    {
        id: "14.1",
        world: 14,
        name: "Peak Viewers",
        desc: "Find max viewers in time window.",
        mission: "Your streaming service tracks viewers per minute. Find the maximum total viewers in any K consecutive minutes. This is your peak load for server planning!",
        hint: "Slide a window of size K. Add new element, remove old one. Track the maximum sum.",
        reveal: "Fixed-size sliding window! Maintain running sum, slide in O(n) time!",
        starterCode: `function solve(viewers, k) {
  // Find maximum sum of any k consecutive elements
  
  return 0;
}`,
        testCases: [
            { input: [[100, 200, 300, 400], 2], expected: 700 },
            { input: [[2, 1, 5, 1, 3, 2], 3], expected: 9 },
            { input: [[1, 1, 1, 1, 1], 3], expected: 3 }
        ],
        xpReward: 80
    },
    {
        id: "14.2",
        world: 14,
        name: "Unique Sessions",
        desc: "Longest streak of unique users.",
        mission: "Find the longest continuous viewing session where all user IDs are unique (no repeats). This measures engaged, diverse audience!",
        hint: "Expand window while unique. When duplicate found, shrink from left until unique again.",
        reveal: "Variable-size window with hash set! The classic 'longest substring without repeating'!",
        starterCode: `function solve(userIds) {
  // Return length of longest subarray with all unique elements
  
  return 0;
}`,
        testCases: [
            { input: [['a', 'b', 'c', 'a', 'b', 'c', 'd']], expected: 4 },
            { input: [['a', 'a', 'a']], expected: 1 },
            { input: [['a', 'b', 'c', 'd', 'e']], expected: 5 }
        ],
        xpReward: 100
    },
    {
        id: "14.3",
        world: 14,
        name: "Binge Watch",
        desc: "Longest same-genre streak.",
        mission: "Find the longest consecutive streak of the same genre. Binge watchers love consistency!",
        hint: "Track current genre and count. Reset when genre changes. Keep max.",
        reveal: "Simple one-pass with state tracking! Window of same value.",
        starterCode: `function solve(genres) {
  // Return longest streak of same genre
  
  return 0;
}`,
        testCases: [
            { input: [['action', 'action', 'comedy', 'comedy', 'comedy', 'action']], expected: 3 },
            { input: [['drama']], expected: 1 },
            { input: [['a', 'b', 'c']], expected: 1 }
        ],
        xpReward: 70
    },
    {
        id: "14.4",
        world: 14,
        name: "Ad Break",
        desc: "Find best window for ads.",
        mission: "Find all starting positions where a K-minute window has EXACTLY target viewers. Perfect for placing ads!",
        hint: "Slide window, check if sum equals target. Collect all matching start indices.",
        reveal: "Fixed window with exact match condition. O(n) single pass!",
        starterCode: `function solve(viewers, k, target) {
  // Return array of starting indices where sum of k elements equals target
  
  return [];
}`,
        testCases: [
            { input: [[1, 2, 3, 4, 5], 2, 5], expected: [1, 3] },
            { input: [[1, 1, 1, 1], 2, 2], expected: [0, 1, 2] },
            { input: [[1, 2, 3], 2, 10], expected: [] }
        ],
        xpReward: 90
    },
    {
        id: "14.5",
        world: 14,
        name: "Content Similar",
        desc: "Find similar title patterns.",
        mission: "Given a target title pattern, find all starting indices in the catalog where an anagram of the pattern exists. Use this for 'similar titles' feature!",
        hint: "Fixed window of pattern length. Use char frequency comparison.",
        reveal: "Find All Anagrams - sliding window with frequency map!",
        starterCode: `function solve(catalog, pattern) {
  // Return starting indices where anagram of pattern exists
  
  return [];
}`,
        testCases: [
            { input: ['cbaebabacd', 'abc'], expected: [0, 6] },
            { input: ['abab', 'ab'], expected: [0, 1, 2] },
            { input: ['hello', 'xyz'], expected: [] }
        ],
        xpReward: 120
    },
    {
        id: "14.6",
        world: 14,
        name: "Bandwidth Peak",
        desc: "Max load in any window.",
        mission: "Find the maximum single viewer count in any K-minute window. You need to track spikes, not just sums! Return array of max for each window.",
        hint: "Use a deque to maintain decreasing order. Pop smaller elements.",
        reveal: "Sliding Window Maximum with monotonic deque! O(n) instead of O(n*k)!",
        starterCode: `function solve(bandwidth, k) {
  // Return array of maximum values in each window of size k
  
  return [];
}`,
        testCases: [
            { input: [[1, 3, -1, -3, 5, 3, 6, 7], 3], expected: [3, 3, 5, 5, 6, 7] },
            { input: [[1, 2, 3, 4], 2], expected: [2, 3, 4] },
            { input: [[9, 8, 7], 1], expected: [9, 8, 7] }
        ],
        xpReward: 150
    },
    {
        id: "14.7",
        world: 14,
        name: "Min Buffer",
        desc: "Smallest chunk to preload.",
        mission: "Find the shortest continuous segment with at least targetViews total. This is the minimum content to buffer for guaranteed engagement!",
        hint: "Expand until >= target, then shrink while still >= target. Track minimum length.",
        reveal: "Minimum Size Subarray Sum - shrinking window pattern!",
        starterCode: `function solve(views, targetViews) {
  // Return length of shortest subarray with sum >= targetViews
  // Return 0 if no such subarray exists
  
  return 0;
}`,
        testCases: [
            { input: [[2, 3, 1, 2, 4, 3], 7], expected: 2 },
            { input: [[1, 4, 4], 4], expected: 1 },
            { input: [[1, 1, 1], 100], expected: 0 }
        ],
        xpReward: 110
    },
    {
        id: "14.8",
        world: 14,
        name: "Genre Variety",
        desc: "Max window with limited genres.",
        mission: "Find the longest viewing session with at most K different genres. Variety is good, but not too much!",
        hint: "Expand while genres <= K. Shrink when > K. Use frequency map.",
        reveal: "Longest Substring with At Most K Distinct - classic variable window!",
        starterCode: `function solve(genres, k) {
  // Return length of longest subarray with at most k distinct genres
  
  return 0;
}`,
        testCases: [
            { input: [['a', 'a', 'b', 'c', 'b', 'b'], 2], expected: 4 },
            { input: [['a', 'b', 'c'], 1], expected: 1 },
            { input: [['a', 'a', 'a'], 3], expected: 3 }
        ],
        xpReward: 120
    },
    {
        id: "14.9",
        world: 14,
        name: "Trending Now",
        desc: "Calculate moving average.",
        mission: "Calculate the moving average of views over the last K time units. Return average after each new data point arrives.",
        hint: "Maintain running sum. When window full, subtract oldest before adding new.",
        reveal: "Classic moving average - the foundation of signal processing!",
        starterCode: `function solve(views, k) {
  // Return array of moving averages
  // First k-1 entries average what's available so far
  
  return [];
}`,
        testCases: [
            { input: [[1, 10, 3, 5], 3], expected: [1, 5.5, 4.67, 6] },
            { input: [[10, 20, 30], 2], expected: [10, 15, 25] }
        ],
        xpReward: 80
    },
    {
        id: "14.10",
        world: 14,
        name: "Quality Switch",
        desc: "Min window with all resolutions.",
        mission: "Find the minimum continuous segment that contains at least one of each required resolution (144p to 4K). This is the min buffer for adaptive streaming!",
        hint: "Expand until all resolutions found. Shrink while still valid. Track minimum.",
        reveal: "Minimum Window Substring - the hardest sliding window pattern!",
        starterCode: `function solve(stream, requiredRes) {
  // Return shortest substring containing all chars in requiredRes
  // Return '' if impossible
  
  return '';
}`,
        testCases: [
            { input: ['ADOBECODEBANC', 'ABC'], expected: 'BANC' },
            { input: ['a', 'a'], expected: 'a' },
            { input: ['a', 'aa'], expected: '' }
        ],
        xpReward: 160
    },
    {
        id: "14.11",
        world: 14,
        name: "Watch Pattern",
        desc: "Detect repeated sequences.",
        mission: "Find all 10-character viewing patterns that occur more than once. These are the viral moments! Return unique patterns only.",
        hint: "Slide 10-char window. Use hash set to track seen patterns.",
        reveal: "Repeated DNA Sequences - fixed window with hashing!",
        starterCode: `function solve(viewLog) {
  // Return all 10-char sequences appearing more than once
  
  return [];
}`,
        testCases: [
            { input: ['AAAAACCCCCAAAAACCCCCC'], expected: ['AAAAACCCCC'] },
            { input: ['AAAAAAAAAAAAA'], expected: ['AAAAAAAAAA'] }
        ],
        xpReward: 100
    },
    {
        id: "14.12",
        world: 14,
        name: "Streaming Master",
        desc: "🏆 BOSS: Complete analytics",
        mission: "Build the ultimate streaming analytics! Return: 1) Max viewers in K-window, 2) Longest unique user streak, 3) Shortest segment with sum >= target.",
        hint: "Combine fixed max window, variable unique window, and min-sum window!",
        reveal: "You've mastered SLIDING WINDOW - the art of sequential analysis!",
        starterCode: `function solve(viewers, k, userIds, target) {
  // Return: {
  //   peakViewers: max sum of k consecutive viewers
  //   longestUnique: length of longest all-unique userIds
  //   minBuffer: shortest subarray with sum >= target
  // }
  
  return {
    peakViewers: 0,
    longestUnique: 0,
    minBuffer: 0
  };
}`,
        testCases: [
            {
                input: [[2, 1, 5, 1, 3, 2], 3, ['a', 'b', 'c', 'a', 'b'], 7],
                expected: { peakViewers: 9, longestUnique: 3, minBuffer: 2 }
            }
        ],
        xpReward: 300,
        isBoss: true
    },

    // ==================== WORLD 15: CALENDAR APP (INTERVALS) ====================
    {
        id: "15.1",
        world: 15,
        name: "Merge Meetings",
        desc: "Combine overlapping events.",
        mission: "Your calendar has overlapping meetings! Merge all overlapping intervals into non-overlapping ones. Two meetings overlap if one starts before the other ends.",
        hint: "Sort by start time first. Then check if current overlaps with previous - merge if so.",
        reveal: "Merge Intervals - sort then linear merge. O(n log n) due to sorting!",
        starterCode: `function solve(meetings) {
  // meetings = [[start, end], ...]
  // Return merged non-overlapping intervals
  
  return [];
}`,
        testCases: [
            { input: [[[1, 3], [2, 6], [8, 10], [15, 18]]], expected: [[1, 6], [8, 10], [15, 18]] },
            { input: [[[1, 4], [4, 5]]], expected: [[1, 5]] },
            { input: [[[1, 4], [2, 3]]], expected: [[1, 4]] }
        ],
        xpReward: 100
    },
    {
        id: "15.2",
        world: 15,
        name: "Add Event",
        desc: "Insert without conflicts.",
        mission: "Insert a new meeting into an already sorted, non-overlapping schedule. Merge if necessary to keep the schedule clean.",
        hint: "Find where new event fits. Merge with overlapping intervals on both sides.",
        reveal: "Insert Interval - handle left non-overlap, merge middle, keep right!",
        starterCode: `function solve(schedule, newMeeting) {
  // schedule is sorted and non-overlapping
  // Insert newMeeting and merge if needed
  
  return [];
}`,
        testCases: [
            { input: [[[1, 3], [6, 9]], [2, 5]], expected: [[1, 5], [6, 9]] },
            { input: [[[1, 2], [3, 5], [6, 7], [8, 10]], [4, 8]], expected: [[1, 2], [3, 10]] },
            { input: [[], [5, 7]], expected: [[5, 7]] }
        ],
        xpReward: 120
    },
    {
        id: "15.3",
        world: 15,
        name: "Free Slots",
        desc: "Find available time.",
        mission: "Given a day's meetings (9 AM to 5 PM = [9, 17]), find all free time slots. Return gaps between meetings.",
        hint: "Sort meetings, then find gaps between end of one and start of next.",
        reveal: "Finding gaps - the inverse of merge intervals!",
        starterCode: `function solve(meetings, dayStart, dayEnd) {
  // Find free slots between dayStart and dayEnd
  
  return [];
}`,
        testCases: [
            { input: [[[10, 12], [14, 16]], 9, 17], expected: [[9, 10], [12, 14], [16, 17]] },
            { input: [[[9, 17]], 9, 17], expected: [] },
            { input: [[], 9, 17], expected: [[9, 17]] }
        ],
        xpReward: 90
    },
    {
        id: "15.4",
        world: 15,
        name: "Meeting Rooms",
        desc: "Minimum rooms needed.",
        mission: "Given meeting times, determine the minimum number of conference rooms required so no two meetings in the same room overlap.",
        hint: "Count overlaps! Sort by start, use min-heap of end times, or count start/end events.",
        reveal: "Meeting Rooms II - track concurrent meetings at any point!",
        starterCode: `function solve(meetings) {
  // Return minimum rooms needed
  
  return 0;
}`,
        testCases: [
            { input: [[[0, 30], [5, 10], [15, 20]]], expected: 2 },
            { input: [[[7, 10], [2, 4]]], expected: 1 },
            { input: [[[0, 5], [5, 10], [10, 15]]], expected: 1 }
        ],
        xpReward: 130
    },
    {
        id: "15.5",
        world: 15,
        name: "Cancel Conflicts",
        desc: "Min events to remove.",
        mission: "You're double-booked! Find the minimum number of meetings to cancel so remaining ones don't overlap. Keep as many meetings as possible!",
        hint: "Greedy: sort by end time. Keep meetings that end earliest - they leave room for more!",
        reveal: "Non-overlapping Intervals - greedy by end time is optimal!",
        starterCode: `function solve(meetings) {
  // Return minimum meetings to remove for no overlap
  
  return 0;
}`,
        testCases: [
            { input: [[[1, 2], [2, 3], [3, 4], [1, 3]]], expected: 1 },
            { input: [[[1, 2], [1, 2], [1, 2]]], expected: 2 },
            { input: [[[1, 2], [2, 3]]], expected: 0 }
        ],
        xpReward: 110
    },
    {
        id: "15.6",
        world: 15,
        name: "Team Sync",
        desc: "Find common free time.",
        mission: "Two employees have their schedules. Find all time slots where BOTH are free. Return the intersection of their free times.",
        hint: "Two pointers on sorted intervals. Find overlaps between free slots.",
        reveal: "Interval Intersection - two pointer merge technique!",
        starterCode: `function solve(schedule1, schedule2) {
  // Both schedules are sorted non-overlapping free slots
  // Return intersection of free times
  
  return [];
}`,
        testCases: [
            { input: [[[0, 2], [5, 10], [13, 23]], [[1, 5], [8, 12], [15, 24]]], expected: [[1, 2], [5, 5], [8, 10], [15, 23]] },
            { input: [[[1, 3]], [[4, 6]]], expected: [] },
            { input: [[[1, 7]], [[2, 5]]], expected: [[2, 5]] }
        ],
        xpReward: 120
    },
    {
        id: "15.7",
        world: 15,
        name: "Booking Check",
        desc: "Validate new event.",
        mission: "Before adding a meeting, check if it conflicts with any existing meeting. Return true if the new meeting can be booked without overlap.",
        hint: "Check each existing meeting. Conflict if newStart < existingEnd AND newEnd > existingStart.",
        reveal: "My Calendar I - simple overlap check. Optimize with BST for many events!",
        starterCode: `function solve(calendar, newMeeting) {
  // Return true if newMeeting doesn't conflict with any in calendar
  
  return false;
}`,
        testCases: [
            { input: [[[10, 20], [30, 40]], [15, 25]], expected: false },
            { input: [[[10, 20], [30, 40]], [20, 30]], expected: true },
            { input: [[], [10, 20]], expected: true }
        ],
        xpReward: 80
    },
    {
        id: "15.8",
        world: 15,
        name: "Double Booking",
        desc: "Allow one overlap.",
        mission: "Your calendar allows double-booking (max 2 meetings at same time) but NOT triple-booking. Return true if new meeting keeps this rule.",
        hint: "Track overlaps. A triple-book happens when new overlaps with an existing overlap.",
        reveal: "My Calendar II - track single and double bookings separately!",
        starterCode: `function solve(calendar, overlaps, newMeeting) {
  // calendar = existing meetings
  // overlaps = already double-booked regions
  // Return true if adding newMeeting won't cause triple-booking
  
  return false;
}`,
        testCases: [
            { input: [[[10, 20]], [], [15, 25]], expected: true },
            { input: [[[10, 20], [15, 25]], [[15, 20]], [5, 15]], expected: false }
        ],
        xpReward: 140
    },
    {
        id: "15.9",
        world: 15,
        name: "Coverage Check",
        desc: "Can we cover the range?",
        mission: "Given intervals, check if they can cover the entire range [start, end]. You need complete coverage with no gaps!",
        hint: "Sort by start. Greedily pick interval that starts <= current position and extends farthest.",
        reveal: "Minimum Intervals to Cover Range - greedy extension!",
        starterCode: `function solve(intervals, start, end) {
  // Return true if intervals can cover [start, end] completely
  
  return false;
}`,
        testCases: [
            { input: [[[0, 2], [1, 4], [3, 6]], 0, 5], expected: true },
            { input: [[[0, 2], [4, 6]], 0, 5], expected: false },
            { input: [[[0, 10]], 2, 5], expected: true }
        ],
        xpReward: 130
    },
    {
        id: "15.10",
        world: 15,
        name: "Event Priority",
        desc: "Best events to attend.",
        mission: "Each event has a value (importance). You can only attend non-overlapping events. Find the maximum total value you can achieve!",
        hint: "DP + binary search. For each event: skip it, or take it + best ending before its start.",
        reveal: "Weighted Interval Scheduling - DP meets intervals!",
        starterCode: `function solve(events) {
  // events = [[start, end, value], ...]
  // Return maximum total value of non-overlapping events
  
  return 0;
}`,
        testCases: [
            { input: [[[1, 3, 50], [2, 5, 20], [4, 6, 100]]], expected: 150 },
            { input: [[[1, 2, 10], [2, 3, 20], [1, 3, 25]]], expected: 30 }
        ],
        xpReward: 160
    },
    {
        id: "15.11",
        world: 15,
        name: "Recurring Events",
        desc: "Handle repeat patterns.",
        mission: "Generate the next N occurrences of a recurring event. Given start date, repeat pattern (daily/weekly), and count, list all occurrences.",
        hint: "Iterate adding the repeat interval to start date N times.",
        reveal: "Pattern generation - foundation for calendar systems!",
        starterCode: `function solve(startDay, repeatDays, count) {
  // startDay = first occurrence
  // repeatDays = interval (7 for weekly)
  // count = how many occurrences to generate
  
  return [];
}`,
        testCases: [
            { input: [1, 7, 4], expected: [1, 8, 15, 22] },
            { input: [5, 1, 3], expected: [5, 6, 7] },
            { input: [10, 14, 2], expected: [10, 24] }
        ],
        xpReward: 70
    },
    {
        id: "15.12",
        world: 15,
        name: "Calendar Master",
        desc: "🏆 BOSS: Complete calendar system",
        mission: "Build the ultimate calendar backend! Return: 1) Merged meetings, 2) Free slots in [9, 17], 3) Minimum rooms needed.",
        hint: "Combine merge intervals, gap finding, and room counting!",
        reveal: "You've mastered INTERVALS - the art of time-based operations!",
        starterCode: `function solve(meetings) {
  // Return: {
  //   merged: non-overlapping merged meetings
  //   freeSlots: gaps between 9 AM and 5 PM
  //   minRooms: minimum conference rooms needed
  // }
  
  return {
    merged: [],
    freeSlots: [],
    minRooms: 0
  };
}`,
        testCases: [
            {
                input: [[[10, 12], [11, 13], [14, 16]]],
                expected: { merged: [[10, 13], [14, 16]], freeSlots: [[9, 10], [13, 14], [16, 17]], minRooms: 2 }
            }
        ],
        xpReward: 300,
        isBoss: true
    },

    // ==================== WORLD 16: SPELL CHECKER (TRIES) ====================
    {
        id: "16.1",
        world: 16,
        name: "Add to Dictionary",
        desc: "Insert words into trie.",
        mission: "Build the foundation of your spell checker! Implement a Trie class with an insert method. Insert words character by character, marking the end of each word.",
        hint: "Each node has children (a-z) and an isEndOfWord flag. Traverse and create nodes as needed.",
        reveal: "Trie insertion - O(m) where m is word length! No collisions like hash tables!",
        starterCode: `function solve(words) {
  // Build a trie from the words array
  // Return the trie as a nested object
  // Each node: { children: {}, isEnd: false }
  
  let root = { children: {}, isEnd: false };
  
  // Insert each word
  
  return root;
}`,
        testCases: [
            { input: [['cat']], expected: { children: { c: { children: { a: { children: { t: { children: {}, isEnd: true } }, isEnd: false } }, isEnd: false } }, isEnd: false } },
            { input: [['a', 'ab']], expected: { children: { a: { children: { b: { children: {}, isEnd: true } }, isEnd: true } }, isEnd: false } }
        ],
        xpReward: 90
    },
    {
        id: "16.2",
        world: 16,
        name: "Word Lookup",
        desc: "Search for exact words.",
        mission: "Check if a word exists in the dictionary. The word must be a complete word (marked as end), not just a prefix!",
        hint: "Traverse the trie following each character. Return true only if path exists AND isEndOfWord is true.",
        reveal: "Trie search - exact word matching in O(m) time!",
        starterCode: `function solve(trie, word) {
  // trie = { children: {...}, isEnd: bool }
  // Return true if word exists as a complete word
  
  return false;
}`,
        testCases: [
            { input: [{ children: { c: { children: { a: { children: { t: { children: {}, isEnd: true } }, isEnd: false } }, isEnd: false } }, isEnd: false }, 'cat'], expected: true },
            { input: [{ children: { c: { children: { a: { children: { t: { children: {}, isEnd: true } }, isEnd: false } }, isEnd: false } }, isEnd: false }, 'ca'], expected: false }
        ],
        xpReward: 80
    },
    {
        id: "16.3",
        world: 16,
        name: "Prefix Match",
        desc: "Check if prefix exists.",
        mission: "Implement the startsWith method. Check if ANY word in the dictionary starts with the given prefix. This is the foundation of autocomplete!",
        hint: "Similar to search, but don't require isEndOfWord. Just verify the path exists.",
        reveal: "Prefix checking - what makes tries special! O(m) for any prefix length!",
        starterCode: `function solve(trie, prefix) {
  // Return true if any word in trie starts with prefix
  
  return false;
}`,
        testCases: [
            { input: [{ children: { c: { children: { a: { children: { t: { children: {}, isEnd: true } }, isEnd: false } }, isEnd: false } }, isEnd: false }, 'ca'], expected: true },
            { input: [{ children: { c: { children: { a: { children: { t: { children: {}, isEnd: true } }, isEnd: false } }, isEnd: false } }, isEnd: false }, 'dog'], expected: false }
        ],
        xpReward: 80
    },
    {
        id: "16.4",
        world: 16,
        name: "Autocomplete",
        desc: "Suggest word completions.",
        mission: "Given a prefix, return ALL words that start with it. This is the core of Google's search suggestions! Return words in any order.",
        hint: "Find the prefix node, then DFS to collect all complete words below it.",
        reveal: "Autocomplete - traverse prefix path, then DFS to find all endings!",
        starterCode: `function solve(words, prefix) {
  // Return all words from the list that start with prefix
  // Build trie first, then traverse
  
  return [];
}`,
        testCases: [
            { input: [['cat', 'car', 'card', 'care', 'dog'], 'car'], expected: ['car', 'card', 'care'] },
            { input: [['apple', 'app', 'application'], 'app'], expected: ['app', 'apple', 'application'] },
            { input: [['hello'], 'hi'], expected: [] }
        ],
        xpReward: 120
    },
    {
        id: "16.5",
        world: 16,
        name: "Word Count",
        desc: "Count words in dictionary.",
        mission: "Count the total number of words stored in the trie. Traverse the entire structure and count nodes where isEndOfWord is true.",
        hint: "DFS through all children, counting isEnd flags.",
        reveal: "Tree traversal on a trie - same DFS pattern applies!",
        starterCode: `function solve(trie) {
  // Return total count of words in trie
  
  return 0;
}`,
        testCases: [
            { input: [{ children: { a: { children: { b: { children: {}, isEnd: true } }, isEnd: true } }, isEnd: false }], expected: 2 },
            { input: [{ children: {}, isEnd: false }], expected: 0 }
        ],
        xpReward: 70
    },
    {
        id: "16.6",
        world: 16,
        name: "Delete Word",
        desc: "Remove from dictionary.",
        mission: "Remove a word from the trie. Be careful - only remove nodes that aren't used by other words! If 'cars' exists, deleting 'car' should only unmark isEnd, not remove nodes.",
        hint: "Recursively check if a node can be deleted (no children and not end of another word).",
        reveal: "Trie deletion - recursive cleanup, only remove unused nodes!",
        starterCode: `function solve(words, wordToDelete) {
  // Build trie from words, delete wordToDelete
  // Return list of remaining words
  
  return [];
}`,
        testCases: [
            { input: [['car', 'cars'], 'car'], expected: ['cars'] },
            { input: [['car', 'card'], 'card'], expected: ['car'] },
            { input: [['test'], 'test'], expected: [] }
        ],
        xpReward: 110
    },
    {
        id: "16.7",
        world: 16,
        name: "Longest Prefix",
        desc: "Find common prefix.",
        mission: "Find the longest common prefix among all words. Stop when characters diverge or a word ends.",
        hint: "Traverse trie while there's exactly one child and current node isn't end of a word.",
        reveal: "LCP with trie - single path traversal until branch or word end!",
        starterCode: `function solve(words) {
  // Return longest common prefix of all words
  
  return '';
}`,
        testCases: [
            { input: [['flower', 'flow', 'flight']], expected: 'fl' },
            { input: [['dog', 'racecar', 'car']], expected: '' },
            { input: [['test', 'testing', 'tested']], expected: 'test' }
        ],
        xpReward: 90
    },
    {
        id: "16.8",
        world: 16,
        name: "Word Search Grid",
        desc: "Find words in letter grid.",
        mission: "Given a 2D grid of letters and a list of words, find all words that exist in the grid. You can move up/down/left/right. Each cell used once per word. This is the famous Word Search II!",
        hint: "Build trie of words. DFS from each cell, checking against trie. Prune paths not in trie.",
        reveal: "Word Search II - trie + backtracking! One of the hardest LeetCode problems!",
        starterCode: `function solve(board, words) {
  // Return all words from the list that can be found in the grid
  
  return [];
}`,
        testCases: [
            { input: [[['o', 'a', 'a', 'n'], ['e', 't', 'a', 'e'], ['i', 'h', 'k', 'r'], ['i', 'f', 'l', 'v']], ['oath', 'pea', 'eat', 'rain']], expected: ['oath', 'eat'] },
            { input: [[['a', 'b'], ['c', 'd']], ['ab', 'cd', 'ac']], expected: ['ab', 'ac'] }
        ],
        xpReward: 180
    },
    {
        id: "16.9",
        world: 16,
        name: "Replace Words",
        desc: "Shorten with root words.",
        mission: "Replace words in a sentence with their shortest root from a dictionary. 'cattle' with root 'cat' becomes 'cat'. If no root exists, keep original.",
        hint: "Build trie of roots. For each word, find shortest matching prefix that's a complete root.",
        reveal: "Dictionary replacement - find shortest prefix that's a valid word!",
        starterCode: `function solve(dictionary, sentence) {
  // Replace each word with its shortest root if exists
  
  return '';
}`,
        testCases: [
            { input: [['cat', 'bat', 'rat'], 'the cattle was rattled by the battery'], expected: 'the cat was rat by the bat' },
            { input: [['a', 'aa', 'aaa'], 'a aa aaa aaaa'], expected: 'a a a a' }
        ],
        xpReward: 120
    },
    {
        id: "16.10",
        world: 16,
        name: "Wildcard Search",
        desc: "Search with '.' wildcard.",
        mission: "Implement search that supports '.' as a wildcard matching any character. 'c.t' should match 'cat', 'cot', 'cut', etc.",
        hint: "When you hit '.', try all children branches recursively.",
        reveal: "Add Dot - branch on wildcards! The basis of regex matching!",
        starterCode: `function solve(words, pattern) {
  // Return true if pattern matches any word
  // '.' matches any single character
  
  return false;
}`,
        testCases: [
            { input: [['cat', 'dog', 'bat'], 'c.t'], expected: true },
            { input: [['cat', 'dog', 'bat'], 'd.g'], expected: true },
            { input: [['cat', 'dog', 'bat'], 'c..t'], expected: false }
        ],
        xpReward: 130
    },
    {
        id: "16.11",
        world: 16,
        name: "Spell Suggestions",
        desc: "Suggest corrections.",
        mission: "Given a misspelled word, find all dictionary words within edit distance 1 (one character add, remove, or replace). These are your spell check suggestions!",
        hint: "Generate all possible 1-edit variations and check each against the trie.",
        reveal: "Edit distance 1 - generate candidates, validate against trie!",
        starterCode: `function solve(dictionary, misspelled) {
  // Return all dictionary words within 1 edit of misspelled
  
  return [];
}`,
        testCases: [
            { input: [['cat', 'car', 'card', 'bat', 'cart'], 'crt'], expected: ['cart'] },
            { input: [['hello', 'hallo', 'hullo'], 'hllo'], expected: ['hello', 'hallo', 'hullo'] }
        ],
        xpReward: 140
    },
    {
        id: "16.12",
        world: 16,
        name: "Spell Master",
        desc: "🏆 BOSS: Complete spell checker",
        mission: "Build the ultimate spell checker! Return: 1) All words matching a prefix (autocomplete), 2) Whether a word exists, 3) All words matching a wildcard pattern.",
        hint: "Combine autocomplete, exact search, and wildcard search into one powerful system!",
        reveal: "You've mastered TRIES - the foundation of text processing and search engines!",
        starterCode: `function solve(dictionary, prefix, exactWord, pattern) {
  // Return: {
  //   autocomplete: all words starting with prefix
  //   exists: true if exactWord is in dictionary
  //   wildcardMatches: all words matching pattern ('.' = any char)
  // }
  
  return {
    autocomplete: [],
    exists: false,
    wildcardMatches: []
  };
}`,
        testCases: [
            {
                input: [['cat', 'car', 'card', 'care', 'dog'], 'car', 'cat', 'd.g'],
                expected: { autocomplete: ['car', 'card', 'care'], exists: true, wildcardMatches: ['dog'] }
            }
        ],
        xpReward: 300,
        isBoss: true
    }
];

// Export for use in game.js
window.WORLDS = WORLDS;
window.LEVELS = LEVELS;
