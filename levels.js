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
        mission: "Return {totalItems, totalValue, lowStockCount, hasDefective}",
        hint: "Combine all your skills together.",
        reveal: "You've mastered ARRAY FUNDAMENTALS!",
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
    }
];

// Export for use in game.js
window.WORLDS = WORLDS;
window.LEVELS = LEVELS;
