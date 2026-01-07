// System Design Judge - Problems Database
// Components with CSS-based icons + Real-world System Design

// Comprehensive component library for realistic system design
const COMPONENTS = {
    // ========== CLIENTS ==========
    'desktop': { id: 'desktop', name: 'Desktop', icon: '💻', category: 'clients', color: '#f97316' },
    'mobile': { id: 'mobile', name: 'Mobile App', icon: '📱', category: 'clients', color: '#f97316' },
    'browser': { id: 'browser', name: 'Web Browser', icon: '🌐', category: 'clients', color: '#f97316' },
    'iot-device': { id: 'iot-device', name: 'IoT Device', icon: '📟', category: 'clients', color: '#f97316' },
    'smart-tv': { id: 'smart-tv', name: 'Smart TV', icon: '📺', category: 'clients', color: '#f97316' },

    // ========== ROUTING & NETWORKING ==========
    'cdn': { id: 'cdn', name: 'CDN', icon: '☁️', category: 'routing', color: '#f472b6' },
    'load-balancer': { id: 'load-balancer', name: 'Load Balancer', icon: '⚖️', category: 'routing', color: '#34d399' },
    'api-gateway': { id: 'api-gateway', name: 'API Gateway', icon: '🚪', category: 'routing', color: '#34d399' },
    'rate-limiter': { id: 'rate-limiter', name: 'Rate Limiter', icon: '🚦', category: 'routing', color: '#22d3ee' },
    'reverse-proxy': { id: 'reverse-proxy', name: 'Reverse Proxy', icon: '🔀', category: 'routing', color: '#34d399' },
    'service-mesh': { id: 'service-mesh', name: 'Service Mesh', icon: '🕸️', category: 'routing', color: '#a78bfa' },

    // ========== DATABASES ==========
    'database': { id: 'database', name: 'SQL Database', icon: '🗄️', category: 'storage', color: '#14b8a6' },
    'nosql': { id: 'nosql', name: 'NoSQL DB', icon: '📊', category: 'storage', color: '#14b8a6' },
    'graph-db': { id: 'graph-db', name: 'Graph DB', icon: '🕸️', category: 'storage', color: '#14b8a6' },
    'timeseries-db': { id: 'timeseries-db', name: 'Time Series DB', icon: '📈', category: 'storage', color: '#14b8a6' },
    'vector-db': { id: 'vector-db', name: 'Vector DB', icon: '🧭', category: 'storage', color: '#8b5cf6' },
    'read-replica': { id: 'read-replica', name: 'Read Replica', icon: '📖', category: 'storage', color: '#14b8a6' },
    'write-primary': { id: 'write-primary', name: 'Write Primary', icon: '✍️', category: 'storage', color: '#14b8a6' },

    // ========== CACHING ==========
    'cache': { id: 'cache', name: 'Redis Cache', icon: '⚡', category: 'storage', color: '#ef4444' },
    'session-store': { id: 'session-store', name: 'Session Store', icon: '🎫', category: 'storage', color: '#f97316' },
    'distributed-cache': { id: 'distributed-cache', name: 'Distributed Cache', icon: '🌐⚡', category: 'storage', color: '#ef4444' },

    // ========== OBJECT STORAGE ==========
    'file-storage': { id: 'file-storage', name: 'File Storage', icon: '📁', category: 'storage', color: '#f97316' },
    'object-storage': { id: 'object-storage', name: 'S3/Object Store', icon: '📦', category: 'storage', color: '#f97316' },
    'blob-storage': { id: 'blob-storage', name: 'Blob Storage', icon: '💾', category: 'storage', color: '#f97316' },

    // ========== COMPUTE ==========
    'server': { id: 'server', name: 'App Server', icon: '🖥️', category: 'compute', color: '#fbbf24' },
    'worker': { id: 'worker', name: 'Background Worker', icon: '⚙️', category: 'compute', color: '#fbbf24' },
    'lambda': { id: 'lambda', name: 'Serverless Fn', icon: 'λ', category: 'compute', color: '#f97316' },
    'container': { id: 'container', name: 'Container', icon: '📦', category: 'compute', color: '#3b82f6' },
    'scheduler': { id: 'scheduler', name: 'Job Scheduler', icon: '⏰', category: 'compute', color: '#fbbf24' },

    // ========== MESSAGING & EVENTS ==========
    'message-queue': { id: 'message-queue', name: 'Message Queue', icon: '📨', category: 'messaging', color: '#a78bfa' },
    'pubsub': { id: 'pubsub', name: 'Pub/Sub', icon: '📢', category: 'messaging', color: '#a78bfa' },
    'kafka': { id: 'kafka', name: 'Kafka/Stream', icon: '🌊', category: 'messaging', color: '#a78bfa' },
    'notification': { id: 'notification', name: 'Push Notify', icon: '🔔', category: 'messaging', color: '#a78bfa' },
    'event-bus': { id: 'event-bus', name: 'Event Bus', icon: '🚌', category: 'messaging', color: '#a78bfa' },
    'dead-letter': { id: 'dead-letter', name: 'Dead Letter Q', icon: '💀', category: 'messaging', color: '#6b7280' },

    // ========== SEARCH & ANALYTICS ==========
    'search-engine': { id: 'search-engine', name: 'Elasticsearch', icon: '🔍', category: 'search', color: '#fb923c' },
    'analytics': { id: 'analytics', name: 'Analytics Engine', icon: '📈', category: 'search', color: '#fb923c' },
    'log-aggregator': { id: 'log-aggregator', name: 'Log Aggregator', icon: '📝', category: 'search', color: '#6b7280' },
    'metrics': { id: 'metrics', name: 'Metrics Store', icon: '📊', category: 'search', color: '#3b82f6' },

    // ========== SECURITY ==========
    'auth-service': { id: 'auth-service', name: 'Auth Service', icon: '🔐', category: 'security', color: '#ef4444' },
    'oauth': { id: 'oauth', name: 'OAuth/SSO', icon: '🔑', category: 'security', color: '#ef4444' },
    'fraud-detection': { id: 'fraud-detection', name: 'Fraud Detection', icon: '🚨', category: 'security', color: '#ef4444' },
    'encryption': { id: 'encryption', name: 'Encryption', icon: '🔒', category: 'security', color: '#ef4444' },

    // ========== EXTERNAL SERVICES ==========
    'payment-gateway': { id: 'payment-gateway', name: 'Payment (Stripe)', icon: '💳', category: 'external', color: '#f472b6' },
    'email-service': { id: 'email-service', name: 'Email (SES)', icon: '📧', category: 'external', color: '#f472b6' },
    'sms-service': { id: 'sms-service', name: 'SMS (Twilio)', icon: '💬', category: 'external', color: '#f472b6' },
    'maps-api': { id: 'maps-api', name: 'Maps API', icon: '🗺️', category: 'external', color: '#34d399' },
    'third-party': { id: 'third-party', name: '3rd Party API', icon: '🔗', category: 'external', color: '#6b7280' },

    // ========== MEDIA & STREAMING ==========
    'video-encoder': { id: 'video-encoder', name: 'Video Encoder', icon: '🎬', category: 'streaming', color: '#22d3ee' },
    'stream-server': { id: 'stream-server', name: 'Stream Server', icon: '📡', category: 'streaming', color: '#22d3ee' },
    'transcoder': { id: 'transcoder', name: 'Transcoder', icon: '🔄', category: 'streaming', color: '#22d3ee' },
    'media-cdn': { id: 'media-cdn', name: 'Media CDN', icon: '🎥', category: 'streaming', color: '#22d3ee' },
    'hls-packager': { id: 'hls-packager', name: 'HLS Packager', icon: '📦🎬', category: 'streaming', color: '#22d3ee' },

    // ========== REAL-TIME ==========
    'websocket': { id: 'websocket', name: 'WebSocket Server', icon: '🔌', category: 'realtime', color: '#2dd4bf' },
    'presence': { id: 'presence', name: 'Presence Service', icon: '👁️', category: 'realtime', color: '#2dd4bf' },
    'signaling': { id: 'signaling', name: 'Signaling Server', icon: '📶', category: 'realtime', color: '#2dd4bf' },

    // ========== LOCATION & GEO ==========
    'location-service': { id: 'location-service', name: 'Location Service', icon: '📍', category: 'realtime', color: '#2dd4bf' },
    'geospatial-db': { id: 'geospatial-db', name: 'Geo Database', icon: '🌍', category: 'storage', color: '#34d399' },
    'route-optimizer': { id: 'route-optimizer', name: 'Route Optimizer', icon: '🛣️', category: 'compute', color: '#34d399' },

    // ========== ML & AI ==========
    'ml-model': { id: 'ml-model', name: 'ML Model Server', icon: '🤖', category: 'ml', color: '#8b5cf6' },
    'recommendation': { id: 'recommendation', name: 'Recommender', icon: '💡', category: 'ml', color: '#8b5cf6' },
    'feature-store': { id: 'feature-store', name: 'Feature Store', icon: '🧬', category: 'ml', color: '#8b5cf6' },
    'training-pipeline': { id: 'training-pipeline', name: 'Training Pipeline', icon: '🏋️', category: 'ml', color: '#8b5cf6' },
    'content-moderation': { id: 'content-moderation', name: 'Content Mod', icon: '👮', category: 'ml', color: '#ef4444' },

    // ========== DATA PROCESSING ==========
    'change-data': { id: 'change-data', name: 'CDC (Debezium)', icon: '🔄', category: 'data', color: '#14b8a6' },
    'etl-pipeline': { id: 'etl-pipeline', name: 'ETL Pipeline', icon: '🔧📊', category: 'data', color: '#a78bfa' },
    'data-warehouse': { id: 'data-warehouse', name: 'Data Warehouse', icon: '🏭', category: 'data', color: '#6b7280' },
    'batch-processor': { id: 'batch-processor', name: 'Batch Processor', icon: '📦⚙️', category: 'data', color: '#fbbf24' },
};

const CATEGORIES = [
    { id: 'request-response', name: 'Request Response', icon: '🔄' },
    { id: 'storage-engines', name: 'Storage Engines', icon: '💾' },
    { id: 'search-engines', name: 'Search Engines', icon: '🔍' },
    { id: 'booking-systems', name: 'Booking Systems', icon: '🎫' },
    { id: 'social-media', name: 'Social Media', icon: '📱' },
    { id: 'location-based', name: 'Location Based', icon: '📍' },
    { id: 'emailing', name: 'Email Services', icon: '📧' },
    { id: 'conferencing', name: 'Conferencing', icon: '📹' },
    { id: 'video-streaming', name: 'Video Streaming', icon: '🎬' },
    { id: 'payment', name: 'Payment Systems', icon: '💳' },
    { id: 'collaborative', name: 'Collaborative', icon: '📝' },
    { id: 'gaming', name: 'Gaming', icon: '🎮' },
    { id: 'discussion', name: 'Discussion', icon: '💬' },
    { id: 'auth', name: 'Authentication', icon: '🔐' },
    { id: 'chat', name: 'Chat Systems', icon: '💭' },
    { id: 'recommendation', name: 'Recommendations', icon: '💡' },
];

// Helper to create problem template
function p(id, title, category, difficulty, isFree, desc, reqs, nodes, edges) {
    return {
        id, title, category, difficulty, isFree, timeLimit: difficulty === 'Easy' ? 600 : difficulty === 'Medium' ? 900 : 1200,
        description: desc, requirements: reqs, path: { nodes, edges }
    };
}

const PROBLEMS = [
    // ============================================
    // REQUEST RESPONSE ARCHITECTURES (Complex)
    // ============================================
    {
        id: 'file-converter',
        title: 'Online File Converter like Zamzar',
        category: 'request-response',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a file conversion service handling millions of uploads. Users upload files (images, docs, videos), the system converts them asynchronously, and notifies users when done. Must handle large files and high concurrency.',
        requirements: [
            { id: 'r1', text: 'Serve static assets (JS, CSS) from edge', targetSlots: ['slot-cdn'] },
            { id: 'r2', text: 'Distribute incoming requests', targetSlots: ['slot-lb'] },
            { id: 'r3', text: 'Store uploaded files durably', targetSlots: ['slot-storage'] },
            { id: 'r4', text: 'Queue conversion jobs for async processing', targetSlots: ['slot-queue'] },
            { id: 'r5', text: 'Background workers for CPU-intensive conversion', targetSlots: ['slot-worker'] },
            { id: 'r6', text: 'Notify users when conversion completes', targetSlots: ['slot-notify'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 120, y: 320, label: 'Client' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn'], x: 320, y: 140, label: 'Edge Cache' },
                { id: 'slot-lb', type: 'slot', correctAnswers: ['load-balancer', 'api-gateway'], x: 320, y: 320, label: 'Traffic' },
                { id: 'api', type: 'filled', component: 'server', x: 520, y: 320, label: 'API Server' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['object-storage', 'blob-storage', 'file-storage'], x: 720, y: 140, label: 'Files' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'pubsub'], x: 720, y: 320, label: 'Jobs' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker'], x: 920, y: 320, label: 'Process' },
                { id: 'db', type: 'filled', component: 'database', x: 920, y: 520, label: 'Metadata DB' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['notification', 'pubsub', 'email-service'], x: 1140, y: 320, label: 'Notify' }
            ],
            edges: [
                { from: 'client', to: 'slot-cdn', label: 'STATIC' },
                { from: 'client', to: 'slot-lb', label: 'UPLOAD' },
                { from: 'slot-lb', to: 'api' },
                { from: 'api', to: 'slot-storage', label: 'STORE RAW' },
                { from: 'api', to: 'slot-queue', label: 'ENQUEUE' },
                { from: 'slot-queue', to: 'slot-worker', label: 'CONSUME' },
                { from: 'slot-worker', to: 'slot-storage', label: 'SAVE RESULT' },
                { from: 'slot-worker', to: 'db', label: 'UPDATE STATUS' },
                { from: 'slot-worker', to: 'slot-notify', label: 'DONE' }
            ]
        }
    },
    {
        id: 'url-shortener',
        title: 'TinyURL / Bit.ly Enterprise',
        category: 'request-response',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a scalable URL shortener handling billions of links. Key challenges: 62-base encoding, pre-generating keys (KGS), handling redirects with low latency, and analytics.',
        requirements: [
            { id: 'r1', text: 'Key Generation Service (KGS) to pre-mint keys', targetSlots: ['slot-kgs'] },
            { id: 'r2', text: 'Manage KGS Ranges (Zookeeper)', targetSlots: ['slot-zk'] },
            { id: 'r3', text: 'Cache Hot Redirects (LRU)', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Persist Mappings (NoSQL)', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Async Click Analytics', targetSlots: ['slot-stream'] },
            { id: 'r6', text: 'Filter Malicious Links', targetSlots: ['slot-filter'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 300, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 320, label: 'Shortener API' },
                { id: 'slot-kgs', type: 'slot', correctAnswers: ['worker', 'server'], x: 500, y: 140, label: 'KGS' },
                { id: 'slot-zk', type: 'slot', correctAnswers: ['zookeeper', 'etcd'], x: 740, y: 140, label: 'Range Mgr' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 740, y: 320, label: 'Cache' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql', 'dynamodb'], x: 940, y: 320, label: 'URL DB' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['kafka', 'message-queue'], x: 940, y: 520, label: 'Clicks' },
                { id: 'slot-filter', type: 'slot', correctAnswers: ['ml-model', 'worker'], x: 500, y: 520, label: 'Malware Scan' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'SHORTEN/GET' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-cache', label: 'CHECK' },
                { from: 'api', to: 'slot-kgs', label: 'GET KEY' },
                { from: 'slot-kgs', to: 'slot-zk', label: 'RESERVE RANGE' },
                { from: 'api', to: 'slot-db', label: 'PERSIST' },
                { from: 'api', to: 'slot-stream', label: 'LOG EVENT' },
                { from: 'api', to: 'slot-filter', label: 'SCAN' }
            ]
        }
    },
    {
        id: 'cricbuzz',
        title: 'Live Sports Scoreboard (Cricbuzz)',
        category: 'request-response',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a real-time sports scoreboard serving millions of concurrent users during peak events. Must support live score updates, ball-by-ball commentary, push notifications, and handle extreme traffic spikes.',
        requirements: [
            { id: 'r1', text: 'Serve static assets from edge locations', targetSlots: ['slot-cdn'] },
            { id: 'r2', text: 'Push real-time updates to clients', targetSlots: ['slot-ws'] },
            { id: 'r3', text: 'Cache frequently accessed match data', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Stream score updates from multiple sources', targetSlots: ['slot-stream'] },
            { id: 'r5', text: 'Send mobile push notifications', targetSlots: ['slot-push'] },
            { id: 'r6', text: 'Persist match history and statistics', targetSlots: ['slot-db'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 120, y: 320, label: 'Mobile App' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn'], x: 320, y: 140, label: 'Static' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 320, y: 320, label: 'LB' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'pubsub'], x: 460, y: 320, label: 'Real-time' },
                { id: 'api', type: 'filled', component: 'server', x: 640, y: 320, label: 'Score API' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache'], x: 840, y: 140, label: 'Hot Data' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['message-queue', 'event-bus', 'pubsub'], x: 840, y: 320, label: 'Ingest' },
                { id: 'slot-push', type: 'slot', correctAnswers: ['notification', 'pubsub'], x: 1020, y: 220, label: 'Notify' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql'], x: 1020, y: 440, label: 'History' }
            ],
            edges: [
                { from: 'client', to: 'slot-cdn', label: 'ASSETS' },
                { from: 'client', to: 'lb', label: 'API' },
                { from: 'lb', to: 'slot-ws' },
                { from: 'slot-ws', to: 'api', label: 'SUBSCRIBE' },
                { from: 'api', to: 'slot-cache', label: 'READ' },
                { from: 'slot-stream', to: 'api', label: 'LIVE DATA' },
                { from: 'api', to: 'slot-push', label: 'WICKET!' },
                { from: 'api', to: 'slot-db', label: 'PERSIST' }
            ]
        }
    },
    {
        id: 'codeforces',
        title: 'Online Judge (CodeForces/LeetCode)',
        category: 'request-response',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design an online judge that evaluates code submissions in multiple languages. Must handle contest spikes with thousands of concurrent submissions, provide sandboxed execution, and real-time verdict updates.',
        requirements: [
            { id: 'r1', text: 'Rate limit submissions during contests', targetSlots: ['slot-rate'] },
            { id: 'r2', text: 'Queue submissions for processing', targetSlots: ['slot-queue'] },
            { id: 'r3', text: 'Sandboxed execution environment', targetSlots: ['slot-worker'] },
            { id: 'r4', text: 'Store code and test results', targetSlots: ['slot-storage'] },
            { id: 'r5', text: 'Real-time verdict updates', targetSlots: ['slot-ws'] },
            { id: 'r6', text: 'Cache problem statements and test cases', targetSlots: ['slot-cache'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 120, y: 320, label: 'Browser' },
                { id: 'slot-rate', type: 'slot', correctAnswers: ['rate-limiter', 'api-gateway'], x: 320, y: 320, label: 'Limit' },
                { id: 'api', type: 'filled', component: 'server', x: 460, y: 320, label: 'API' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue'], x: 640, y: 220, label: 'Jobs' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker'], x: 840, y: 220, label: 'Sandbox' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 640, y: 460, label: 'Code' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'pubsub'], x: 1020, y: 320, label: 'Live' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache'], x: 840, y: 460, label: 'Tests' },
                { id: 'db', type: 'filled', component: 'database', x: 1220, y: 320, label: 'Results DB' }
            ],
            edges: [
                { from: 'client', to: 'slot-rate', label: 'SUBMIT' },
                { from: 'slot-rate', to: 'api' },
                { from: 'api', to: 'slot-queue', label: 'ENQUEUE' },
                { from: 'slot-queue', to: 'slot-worker', label: 'EXECUTE' },
                { from: 'api', to: 'slot-storage', label: 'SAVE CODE' },
                { from: 'slot-worker', to: 'slot-cache', label: 'LOAD TESTS' },
                { from: 'slot-worker', to: 'slot-ws', label: 'VERDICT' },
                { from: 'slot-ws', to: 'db', label: 'STORE' }
            ]
        }
    },

    // ============================================
    // STORAGE ENGINES (Complex)
    // ============================================
    {
        id: 'dropbox',
        title: 'Dropbox File Sync System',
        category: 'storage-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a file synchronization system handling petabytes of data. Must support chunked uploads, delta sync, conflict resolution, and real-time sync across millions of devices.',
        requirements: [
            { id: 'r1', text: 'Distribute upload/download traffic', targetSlots: ['slot-lb'] },
            { id: 'r2', text: 'Chunk files and deduplicate', targetSlots: ['slot-chunk'] },
            { id: 'r3', text: 'Store file chunks durably', targetSlots: ['slot-storage'] },
            { id: 'r4', text: 'Track file versions and metadata', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Notify devices of changes in real-time', targetSlots: ['slot-sync'] },
            { id: 'r6', text: 'Queue sync operations', targetSlots: ['slot-queue'] }
        ],
        path: {
            nodes: [
                { id: 'desktop', type: 'filled', component: 'desktop', x: 120, y: 320, label: 'Desktop' },
                { id: 'slot-lb', type: 'slot', correctAnswers: ['load-balancer', 'api-gateway'], x: 320, y: 320, label: 'Traffic' },
                { id: 'api', type: 'filled', component: 'server', x: 460, y: 320, label: 'Sync API' },
                { id: 'slot-chunk', type: 'slot', correctAnswers: ['worker'], x: 640, y: 200, label: 'Chunk' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['blob-storage', 'object-storage'], x: 840, y: 200, label: 'Blocks' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql'], x: 640, y: 460, label: 'Metadata' },
                { id: 'slot-sync', type: 'slot', correctAnswers: ['websocket', 'pubsub'], x: 840, y: 320, label: 'Notify' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue'], x: 1020, y: 320, label: 'Sync Jobs' },
                { id: 'worker', type: 'filled', component: 'worker', x: 1220, y: 320, label: 'Sync Worker' }
            ],
            edges: [
                { from: 'desktop', to: 'slot-lb', label: 'UPLOAD' },
                { from: 'slot-lb', to: 'api' },
                { from: 'api', to: 'slot-chunk', label: 'SPLIT' },
                { from: 'slot-chunk', to: 'slot-storage', label: 'STORE' },
                { from: 'api', to: 'slot-db', label: 'VERSION' },
                { from: 'api', to: 'slot-sync', label: 'CHANGE' },
                { from: 'slot-sync', to: 'slot-queue', label: 'QUEUE' },
                { from: 'slot-queue', to: 'worker', label: 'PROCESS' }
            ]
        }
    },
    {
        id: 'google-drive',
        title: 'Google Drive Cloud Storage',
        category: 'storage-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design cloud storage with collaboration features. Must support file sharing, permissions, real-time editing notifications, and global access with low latency.',
        requirements: [
            { id: 'r1', text: 'Serve files from edge locations', targetSlots: ['slot-cdn'] },
            { id: 'r2', text: 'Authenticate and authorize requests', targetSlots: ['slot-auth'] },
            { id: 'r3', text: 'Store file content', targetSlots: ['slot-storage'] },
            { id: 'r4', text: 'Manage file metadata and permissions', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Index files for search', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Notify collaborators of changes', targetSlots: ['slot-notify'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 120, y: 320, label: 'Browser' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn'], x: 320, y: 140, label: 'Edge' },
                { id: 'slot-auth', type: 'slot', correctAnswers: ['auth-service', 'oauth'], x: 320, y: 320, label: 'Auth' },
                { id: 'api', type: 'filled', component: 'server', x: 460, y: 320, label: 'Drive API' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 640, y: 200, label: 'Files' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database'], x: 640, y: 460, label: 'Metadata' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine'], x: 840, y: 320, label: 'Index' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['pubsub', 'notification', 'websocket'], x: 1020, y: 320, label: 'Collab' }
            ],
            edges: [
                { from: 'client', to: 'slot-cdn', label: 'DOWNLOAD' },
                { from: 'client', to: 'slot-auth', label: 'LOGIN' },
                { from: 'slot-auth', to: 'api' },
                { from: 'api', to: 'slot-storage', label: 'READ/WRITE' },
                { from: 'api', to: 'slot-db', label: 'PERMISSIONS' },
                { from: 'api', to: 'slot-search', label: 'INDEX' },
                { from: 'api', to: 'slot-notify', label: 'SHARED!' }
            ]
        }
    },
    {
        id: 'imgur',
        title: 'Imgur Extreme Scale Hosting',
        category: 'storage-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a high-scale image hosting site. Challenges: Viral traffic spikes, de-duplication (SHA-1), generating thumbnails on fly, and serving via CDNs.',
        requirements: [
            { id: 'r1', text: 'Deduplicate images (Hashing)', targetSlots: ['slot-dedup'] },
            { id: 'r2', text: 'Resize/Optimize Images', targetSlots: ['slot-worker'] },
            { id: 'r3', text: 'Separate Metadata from Blobs', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Viral Content Caching (CDN)', targetSlots: ['slot-cdn'] },
            { id: 'r5', text: 'Detect Viral/Trending Spikes', targetSlots: ['slot-analytics'] },
            { id: 'r6', text: 'Archive infrequently accessed', targetSlots: ['slot-archive'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 200, label: 'Upload' },
                { id: 'slot-dedup', type: 'slot', correctAnswers: ['feature-store', 'database'], x: 440, y: 440, label: 'Hash Map' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'video-encoder'], x: 620, y: 200, label: 'Resizer' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn', 'media-cdn'], x: 800, y: 200, label: 'Hot Link' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql'], x: 620, y: 440, label: 'Meta Shard' },
                { id: 'slot-archive', type: 'slot', correctAnswers: ['object-storage', 's3'], x: 800, y: 440, label: 'Cold Blob' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'stream-processor'], x: 1000, y: 320, label: 'Viral Det' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'UPLOAD' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-dedup', label: 'CHECK HASH' },
                { from: 'api', to: 'slot-worker', label: 'JOB' },
                { from: 'slot-worker', to: 'slot-archive', label: 'STORE' },
                { from: 'slot-archive', to: 'slot-cdn', label: 'CACHE' },
                { from: 'api', to: 'slot-db', label: 'METADATA' },
                { from: 'api', to: 'slot-analytics', label: 'LOG VIEW' },
                { from: 'slot-analytics', to: 'slot-cdn', label: 'WARM UP' }
            ]
        }
    },

    // ============================================
    // SEARCH ENGINES (4 problems)
    // ============================================
    // ============================================
    // SEARCH ENGINES (4 problems)
    // ============================================
    {
        id: 'airbnb',
        title: 'Airbnb Property Search',
        category: 'search-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a vacation rental platform handling millions of bookings. Must support complex geospatial search, real-time availability sync, dynamic pricing, and secure payments.',
        requirements: [
            { id: 'r1', text: 'Geo-spatial Indexing (S2/Geohash)', targetSlots: ['slot-geo'] },
            { id: 'r2', text: 'Store Property Images', targetSlots: ['slot-blob'] },
            { id: 'r3', text: 'Cache Pricing & Availability', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Full-text Search (Amenities)', targetSlots: ['slot-search'] },
            { id: 'r5', text: 'Process Bookings & Payments', targetSlots: ['slot-pay'] },
            { id: 'r6', text: 'Track User Clickstreams', targetSlots: ['slot-analytics'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 140, y: 320, label: 'Guest' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 340, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 540, y: 320, label: 'API' },
                { id: 'slot-geo', type: 'slot', correctAnswers: ['geospatial-db', 'location-service'], x: 540, y: 140, label: 'Geo Index' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 740, y: 140, label: 'Text Search' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 740, y: 320, label: 'Hot Data' },
                { id: 'slot-blob', type: 'slot', correctAnswers: ['object-storage', 'cdn'], x: 740, y: 500, label: 'Photos' },
                { id: 'slot-pay', type: 'slot', correctAnswers: ['payment-gateway'], x: 940, y: 320, label: 'Payments' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'kafka'], x: 940, y: 140, label: 'Logs' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'SEARCH' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-geo', label: 'LOC QUERY' },
                { from: 'api', to: 'slot-search', label: 'KEYWORD' },
                { from: 'api', to: 'slot-cache', label: 'CHECK' },
                { from: 'api', to: 'slot-blob', label: 'IMAGES' },
                { from: 'api', to: 'slot-pay', label: 'BOOK' },
                { from: 'api', to: 'slot-analytics', label: 'TRACK' }
            ]
        }
    },
    {
        id: 'google-maps',
        title: 'Google Maps System',
        category: 'search-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a global mapping system. Key challenges: Rendering vector tiles, calculating optimal routes (A* / Dijkstra), handling real-time traffic data, and location search.',
        requirements: [
            { id: 'r1', text: 'Serve Vector Tiles (Edge)', targetSlots: ['slot-cdn'] },
            { id: 'r2', text: 'Route Optimization Engine', targetSlots: ['slot-route'] },
            { id: 'r3', text: 'Real-time Traffic Ingestion', targetSlots: ['slot-stream'] },
            { id: 'r4', text: 'Place/POI Search', targetSlots: ['slot-search'] },
            { id: 'r5', text: 'Store Map Data (QuadTree)', targetSlots: ['slot-geo'] },
            { id: 'r6', text: 'Process ETA Predictions', targetSlots: ['slot-ml'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 100, y: 320, label: 'Maps App' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn'], x: 300, y: 200, label: 'Tile Edge' },
                { id: 'gateway', type: 'filled', component: 'api-gateway', x: 300, y: 440, label: 'Gateway' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 440, label: 'Maps API' },
                { id: 'slot-route', type: 'slot', correctAnswers: ['route-optimizer', 'worker'], x: 700, y: 320, label: 'Routing' },
                { id: 'slot-geo', type: 'slot', correctAnswers: ['geospatial-db', 'database'], x: 700, y: 560, label: 'Map DB' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 900, y: 440, label: 'Places' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['kafka', 'pubsub'], x: 700, y: 200, label: 'Traffic In' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['ml-model', 'analytics'], x: 900, y: 200, label: 'ETA ML' }
            ],
            edges: [
                { from: 'client', to: 'slot-cdn', label: 'GET TILES' },
                { from: 'client', to: 'gateway', label: 'NAVIGATE' },
                { from: 'gateway', to: 'api' },
                { from: 'api', to: 'slot-route', label: 'CALC PATH' },
                { from: 'slot-route', to: 'slot-geo', label: 'FETCH SEGMENTS' },
                { from: 'api', to: 'slot-search', label: 'FIND POI' },
                { from: 'slot-stream', to: 'slot-ml', label: 'FLOW' },
                { from: 'slot-ml', to: 'slot-route', label: 'WEIGHTS' }
            ]
        }
    },
    {
        id: 'elasticsearch',
        title: 'Distributed Search Cluster',
        category: 'search-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a distributed search engine like Elasticsearch. Must handle sharding, replication, leader election (Raft/Paxos), inverted index storage, and complex aggregation queries.',
        requirements: [
            { id: 'r1', text: 'Manage Cluster State (Coordination)', targetSlots: ['slot-coord'] },
            { id: 'r2', text: 'Store Inverted Indices (Shards)', targetSlots: ['slot-data'] },
            { id: 'r3', text: 'Ingest & Buffer Logs', targetSlots: ['slot-queue'] },
            { id: 'r4', text: 'Cache Frequently used Filters', targetSlots: ['slot-cache'] },
            { id: 'r5', text: 'Archive Old Logs', targetSlots: ['slot-archive'] },
            { id: 'r6', text: 'Visualize Metrics (Kibana)', targetSlots: ['slot-viz'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'server', x: 100, y: 320, label: 'App Server' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 300, y: 320, label: 'LB' },
                { id: 'slot-coord', type: 'slot', correctAnswers: ['server', 'zookeeper'], x: 500, y: 320, label: 'Coordinator' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['kafka', 'message-queue'], x: 300, y: 560, label: 'Log Buffer' },
                { id: 'slot-data', type: 'slot', correctAnswers: ['search-engine', 'database'], x: 740, y: 320, label: 'Data Node' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 740, y: 140, label: 'Filter $Cache' },
                { id: 'slot-archive', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 940, y: 320, label: 'Cold Store' },
                { id: 'slot-viz', type: 'slot', correctAnswers: ['analytics', 'browser'], x: 500, y: 140, label: 'Dashboard' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'QUERY / INDEX' },
                { from: 'lb', to: 'slot-coord', label: 'ROUTE' },
                { from: 'client', to: 'slot-queue', label: 'INGEST' },
                { from: 'slot-queue', to: 'slot-coord', label: 'BULK' },
                { from: 'slot-coord', to: 'slot-data', label: 'FANOUT' },
                { from: 'slot-data', to: 'slot-cache', label: 'CHECK' },
                { from: 'slot-data', to: 'slot-archive', label: 'SNAPSHOT' },
                { from: 'slot-viz', to: 'slot-coord', label: 'AGGREGATE' }
            ]
        }
    },
    {
        id: 'twitter-search',
        title: 'Twitter/X Real-time Search',
        category: 'search-engines',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a real-time search engine for tweets. Must ingest millions of tweets/sec, index them immediately ("earlybird" architecture), and serve fresh results with <100ms latency.',
        requirements: [
            { id: 'r1', text: 'Ingest Tweet Stream (Firehose)', targetSlots: ['slot-stream'] },
            { id: 'r2', text: 'Partition/Shard Index (Earlybird)', targetSlots: ['slot-index'] },
            { id: 'r3', text: 'Compute Real-time Trends', targetSlots: ['slot-storm'] },
            { id: 'r4', text: 'Scatter-Gather Search Queries', targetSlots: ['slot-mixer'] },
            { id: 'r5', text: 'Persist Tweet Data', targetSlots: ['slot-store'] },
            { id: 'r6', text: 'Filter Spam/Abuse', targetSlots: ['slot-ml'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'slot-mixer', type: 'slot', correctAnswers: ['server', 'api-gateway'], x: 460, y: 320, label: 'Term Mixer' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['kafka', 'message-queue'], x: 280, y: 560, label: 'Firehose' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['ml-model', 'content-moderation'], x: 460, y: 560, label: 'Spam Filter' },
                { id: 'slot-index', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 740, y: 320, label: 'Index Shards' },
                { id: 'slot-store', type: 'slot', correctAnswers: ['database', 'cassandra'], x: 740, y: 560, label: 'Tweet DB' },
                { id: 'slot-storm', type: 'slot', correctAnswers: ['stream-server', 'analytics'], x: 460, y: 140, label: 'Trends' },
                { id: 'cache', type: 'filled', component: 'cache', x: 740, y: 140, label: 'Results #' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'SEARCH' },
                { from: 'lb', to: 'slot-mixer' },
                { from: 'slot-mixer', to: 'slot-index', label: 'SCATTER' },
                { from: 'slot-mixer', to: 'cache', label: 'CHECK' },
                { from: 'slot-stream', to: 'slot-ml', label: 'FILTER' },
                { from: 'slot-ml', to: 'slot-index', label: 'INDEX' },
                { from: 'slot-ml', to: 'slot-store', label: 'SAVE' },
                { from: 'slot-ml', to: 'slot-storm', label: 'COUNT' }
            ]
        }
    },

    // ============================================
    // BOOKING SYSTEMS (4 problems)
    // ============================================
    {
        id: 'bookmyshow',
        title: 'BookMyShow (High Concurrency)',
        category: 'booking-systems',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a movie booking platform handling flash sales (e.g., Avengers/Marvel releases). Must prevent double-booking, handle payment failures, and deliver tickets via SMS/Email.',
        requirements: [
            { id: 'r1', text: 'Handle Booking Bursts (Queue)', targetSlots: ['slot-queue'] },
            { id: 'r2', text: 'Distributed Lock for Seats', targetSlots: ['slot-cache'] },
            { id: 'r3', text: 'Transactional Booking DB', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Payment Processing', targetSlots: ['slot-pay'] },
            { id: 'r5', text: 'Async Notification (SMS/Email)', targetSlots: ['slot-notify'] },
            { id: 'r6', text: 'Analytics for Box Office', targetSlots: ['slot-analytics'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 100, y: 320, label: 'App' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 300, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 320, label: 'Server' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 500, y: 140, label: 'Wait Queue' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['redis', 'cache'], x: 740, y: 140, label: 'Seat Lock' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sql'], x: 740, y: 320, label: 'Orders' },
                { id: 'slot-pay', type: 'slot', correctAnswers: ['payment-gateway'], x: 740, y: 500, label: 'PG' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['notification', 'sms-service'], x: 940, y: 320, label: 'Ticket' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'data-warehouse'], x: 940, y: 500, label: 'Sales' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'BOOK' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-queue', label: 'THROTTLE' },
                { from: 'api', to: 'slot-cache', label: 'ACQUIRE LOCK' },
                { from: 'api', to: 'slot-db', label: 'TRANSACTION' },
                { from: 'api', to: 'slot-pay', label: 'CHARGE' },
                { from: 'slot-db', to: 'slot-notify', label: 'CONFIRM' },
                { from: 'slot-pay', to: 'slot-analytics', label: 'AUDIT' }
            ]
        }
    },
    {
        id: 'makemytrip',
        title: 'MakeMyTrip Broadcast Search',
        category: 'booking-systems',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a flight aggregator. Queries multiple GDS (Global Distribution Systems) and Airline APIs in parallel, aggregates results, caches them for speed, and handles booking redirection.',
        requirements: [
            { id: 'r1', text: 'Broadcast Search to Partners', targetSlots: ['slot-aggregator'] },
            { id: 'r2', text: 'Cache Flight Results (TTL)', targetSlots: ['slot-cache'] },
            { id: 'r3', text: 'Connect to 3rd Party GDS/Airlines', targetSlots: ['slot-gds'] },
            { id: 'r4', text: 'Track Search History', targetSlots: ['slot-history'] },
            { id: 'r5', text: 'Recommend Destinations', targetSlots: ['slot-rec'] },
            { id: 'r6', text: 'Process Referrals/Bookings', targetSlots: ['slot-api'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'Traveler' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'slot-api', type: 'slot', correctAnswers: ['server', 'api-gateway'], x: 460, y: 320, label: 'API GW' },
                { id: 'slot-aggregator', type: 'slot', correctAnswers: ['worker', 'server'], x: 680, y: 320, label: 'Aggregator' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['distributed-cache', 'redis'], x: 680, y: 140, label: 'Search Cache' },
                { id: 'slot-gds', type: 'slot', correctAnswers: ['third-party', 'api-gateway'], x: 920, y: 320, label: 'Amadeus/Sabre' },
                { id: 'slot-history', type: 'slot', correctAnswers: ['database', 'nosql'], x: 460, y: 540, label: 'User DB' },
                { id: 'slot-rec', type: 'slot', correctAnswers: ['recommendation', 'ml-model'], x: 680, y: 540, label: 'Recs' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'SEARCH FLIGHT' },
                { from: 'lb', to: 'slot-api' },
                { from: 'slot-api', to: 'slot-history', label: 'SAVE' },
                { from: 'slot-api', to: 'slot-cache', label: 'CHECK' },
                { from: 'slot-api', to: 'slot-aggregator', label: 'MISS' },
                { from: 'slot-aggregator', to: 'slot-gds', label: 'FETCH' },
                { from: 'slot-aggregator', to: 'slot-cache', label: 'UPDATE' },
                { from: 'slot-api', to: 'slot-rec', label: 'GET ADS' }
            ]
        }
    },
    {
        id: 'opentable',
        title: 'OpenTable Reservation System',
        category: 'booking-systems',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a global restaurant reservation system. Must handle time-zone logic, table management (inventory), notifications, and user dining history.',
        requirements: [
            { id: 'r1', text: 'Search by Cuisine/Location', targetSlots: ['slot-search'] },
            { id: 'r2', text: 'Manage Table Inventory (SQL)', targetSlots: ['slot-db'] },
            { id: 'r3', text: 'Cache Availability', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Send SMS/Email Confirmations', targetSlots: ['slot-notify'] },
            { id: 'r5', text: 'Diner Analytics/History', targetSlots: ['slot-analytics'] },
            { id: 'r6', text: 'Sync with POS Systems', targetSlots: ['slot-pos'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 100, y: 320, label: 'Diner' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 300, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 320, label: 'API' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 500, y: 140, label: 'Search' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 700, y: 140, label: 'Avail Cache' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sql'], x: 700, y: 320, label: 'Inventory' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['notification', 'email-service'], x: 700, y: 520, label: 'Alert' },
                { id: 'slot-pos', type: 'slot', correctAnswers: ['third-party', 'iot-device'], x: 920, y: 320, label: 'Restaurant POS' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'data-warehouse'], x: 920, y: 520, label: 'History' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'RESERVE' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-search', label: 'FIND' },
                { from: 'api', to: 'slot-cache', label: 'CHECK' },
                { from: 'api', to: 'slot-db', label: 'BOOK' },
                { from: 'slot-db', to: 'slot-notify', label: 'CONFIRM' },
                { from: 'slot-db', to: 'slot-pos', label: 'SYNC' },
                { from: 'slot-pos', to: 'slot-analytics', label: 'STATS' }
            ]
        }
    },
    {
        id: 'practo',
        title: 'Practo Doctor Consultations',
        category: 'booking-systems',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a telemedicine platform. Supports video consultations, appointment booking, e-prescriptions, and secure health record storage (HIPAA compliant).',
        requirements: [
            { id: 'r1', text: 'Find Doctors (Geo/Specialty)', targetSlots: ['slot-search'] },
            { id: 'r2', text: 'Video Consultation WebRTC', targetSlots: ['slot-video'] },
            { id: 'r3', text: 'Secure Health Records (Encrypted)', targetSlots: ['slot-storage'] },
            { id: 'r4', text: 'Appointment Scheduling', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Notifications & Reminders', targetSlots: ['slot-notify'] },
            { id: 'r6', text: 'Payment & Billing', targetSlots: ['slot-pay'] }
        ],
        path: {
            nodes: [
                { id: 'patient', type: 'filled', component: 'mobile', x: 100, y: 220, label: 'Patient' },
                { id: 'doctor', type: 'filled', component: 'desktop', x: 100, y: 440, label: 'Doctor' },
                { id: 'gateway', type: 'filled', component: 'api-gateway', x: 300, y: 320, label: 'Gateway' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 500, y: 140, label: 'Doc Search' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sql'], x: 500, y: 320, label: 'Schedule' },
                { id: 'slot-video', type: 'slot', correctAnswers: ['signaling', 'server'], x: 500, y: 520, label: 'Video Sig' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['object-storage', 'database'], x: 740, y: 320, label: 'Records' },
                { id: 'slot-pay', type: 'slot', correctAnswers: ['payment-gateway'], x: 740, y: 140, label: 'Fees' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['notification', 'sms-service'], x: 740, y: 520, label: 'Remind' }
            ],
            edges: [
                { from: 'patient', to: 'gateway', label: 'BOOK' },
                { from: 'doctor', to: 'gateway', label: 'JOIN' },
                { from: 'gateway', to: 'slot-search', label: 'FIND' },
                { from: 'gateway', to: 'slot-db', label: 'APPT' },
                { from: 'gateway', to: 'slot-video', label: 'CALL' },
                { from: 'gateway', to: 'slot-storage', label: 'RX' },
                { from: 'slot-db', to: 'slot-pay', label: 'BILL' },
                { from: 'slot-db', to: 'slot-notify', label: 'ALERT' }
            ]
        }
    },

    // ============================================
    // SOCIAL MEDIA (4 problems)
    // ============================================
    {
        id: 'facebook',
        title: 'Facebook Social Graph',
        category: 'social-media',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design the Facebook social graph and newsfeed. Handle bidirectional friendships, complex privacy controls, and generate personalized feeds for billions of users.',
        requirements: [
            { id: 'r1', text: 'Store Social Graph (Nodes/Edges)', targetSlots: ['slot-graph'] },
            { id: 'r2', text: 'Rank Newsfeed (ML)', targetSlots: ['slot-rank'] },
            { id: 'r3', text: 'Cache User Feeds (Fan-out)', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Store Posts & Media', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Real-time Likes/Comments', targetSlots: ['slot-ws'] },
            { id: 'r6', text: 'Async Activity Logs', targetSlots: ['slot-queue'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 300, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 320, label: 'Graph API' },
                { id: 'slot-graph', type: 'slot', correctAnswers: ['graph-db', 'sql'], x: 500, y: 140, label: 'Social Graph' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'cassandra'], x: 740, y: 320, label: 'Posts DB' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 740, y: 140, label: 'Feed Cache' },
                { id: 'slot-rank', type: 'slot', correctAnswers: ['ml-model', 'recommendation'], x: 940, y: 140, label: 'Ranker' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'pubsub'], x: 740, y: 500, label: 'Live' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 940, y: 320, label: 'Activity' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'REQ' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-graph', label: 'FRIENDS' },
                { from: 'api', to: 'slot-db', label: 'FETCH POSTS' },
                { from: 'api', to: 'slot-cache', label: 'GET FEED' },
                { from: 'slot-cache', to: 'slot-rank', label: 'SORT' },
                { from: 'api', to: 'slot-ws', label: 'NOTIFY' },
                { from: 'api', to: 'slot-queue', label: 'LOG' }
            ]
        }
    },
    {
        id: 'linkedin',
        title: 'LinkedIn Professional Network',
        category: 'social-media',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design LinkedIn. Focus on "Degrees of Connection" queries (1st, 2nd, 3rd), profile viewing visibility, search, and professional content feed.',
        requirements: [
            { id: 'r1', text: 'Graph Traversal (Connections)', targetSlots: ['slot-graph'] },
            { id: 'r2', text: 'Profile/Job Search', targetSlots: ['slot-search'] },
            { id: 'r3', text: 'Store Rich Profile Data', targetSlots: ['slot-doc'] },
            { id: 'r4', text: 'Track Profile Views', targetSlots: ['slot-stream'] },
            { id: 'r5', text: 'Cache Connections', targetSlots: ['slot-cache'] },
            { id: 'r6', text: 'Recruiter Analytics', targetSlots: ['slot-analytics'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'Pro' },
                { id: 'gateway', type: 'filled', component: 'api-gateway', x: 300, y: 320, label: 'Gateway' },
                { id: 'api', type: 'filled', component: 'server', x: 500, y: 320, label: 'API' },
                { id: 'slot-graph', type: 'slot', correctAnswers: ['graph-db', 'neo4j'], x: 500, y: 140, label: 'Connections' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 740, y: 140, label: 'Search' },
                { id: 'slot-doc', type: 'slot', correctAnswers: ['nosql', 'database'], x: 740, y: 320, label: 'Profile DB' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['kafka', 'message-queue'], x: 500, y: 520, label: 'View Events' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 740, y: 520, label: 'Graph Cache' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'data-warehouse'], x: 940, y: 320, label: 'Reports' }
            ],
            edges: [
                { from: 'client', to: 'gateway', label: 'VIEW' },
                { from: 'gateway', to: 'api' },
                { from: 'api', to: 'slot-graph', label: '2nd/3rd DEG' },
                { from: 'api', to: 'slot-search', label: 'QUERY' },
                { from: 'api', to: 'slot-doc', label: 'FETCH' },
                { from: 'api', to: 'slot-stream', label: 'LOG VIEW' },
                { from: 'slot-graph', to: 'slot-cache', label: 'CACHE' },
                { from: 'slot-stream', to: 'slot-analytics', label: 'AGGREGATE' }
            ]
        }
    },
    // ============================================
    // LOCATION BASED (Complex - Real Uber/Maps Architecture)
    // ============================================
    {
        id: 'uber',
        title: 'Uber Ride-Sharing Platform',
        category: 'location-based',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design Uber handling millions of concurrent rides. Must support real-time GPS tracking, efficient driver matching within radius, surge pricing, trip ETA, fare calculation, payments, and driver/rider ratings with fraud prevention.',
        requirements: [
            { id: 'r1', text: 'Store and query driver locations efficiently', targetSlots: ['slot-geo'] },
            { id: 'r2', text: 'Match riders with nearby drivers in real-time', targetSlots: ['slot-match'] },
            { id: 'r3', text: 'Push real-time location updates to riders', targetSlots: ['slot-ws'] },
            { id: 'r4', text: 'Process payments securely', targetSlots: ['slot-payment'] },
            { id: 'r5', text: 'Calculate optimal routes and ETA', targetSlots: ['slot-route'] },
            { id: 'r6', text: 'Detect fraudulent rides and driver behavior', targetSlots: ['slot-fraud'] },
            { id: 'r7', text: 'Stream trip events for analytics', targetSlots: ['slot-kafka'] }
        ],
        path: {
            nodes: [
                { id: 'rider', type: 'filled', component: 'mobile', x: 100, y: 220, label: 'Rider App' },
                { id: 'driver', type: 'filled', component: 'mobile', x: 100, y: 440, label: 'Driver App' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'Trip API' },
                { id: 'slot-geo', type: 'slot', correctAnswers: ['geospatial-db', 'location-service'], x: 640, y: 140, label: 'Geo Index' },
                { id: 'slot-match', type: 'slot', correctAnswers: ['worker', 'server'], x: 640, y: 320, label: 'Match' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'pubsub'], x: 820, y: 220, label: 'Live Track' },
                { id: 'slot-route', type: 'slot', correctAnswers: ['route-optimizer', 'maps-api'], x: 820, y: 320, label: 'Route' },
                { id: 'slot-payment', type: 'slot', correctAnswers: ['payment-gateway'], x: 1000, y: 220, label: 'Pay' },
                { id: 'slot-fraud', type: 'slot', correctAnswers: ['fraud-detection', 'ml-model'], x: 1000, y: 320, label: 'Fraud' },
                { id: 'slot-kafka', type: 'slot', correctAnswers: ['kafka', 'event-bus'], x: 1000, y: 460, label: 'Events' }
            ],
            edges: [
                { from: 'rider', to: 'lb', label: 'REQUEST RIDE' },
                { from: 'driver', to: 'lb', label: 'GPS UPDATE' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-geo', label: 'NEARBY DRIVERS' },
                { from: 'slot-geo', to: 'slot-match', label: 'CANDIDATES' },
                { from: 'slot-match', to: 'slot-ws', label: 'ASSIGNED' },
                { from: 'api', to: 'slot-route', label: 'ETA' },
                { from: 'api', to: 'slot-payment', label: 'CHARGE' },
                { from: 'slot-payment', to: 'slot-fraud', label: 'CHECK' },
                { from: 'api', to: 'slot-kafka', label: 'TRIP EVENT' }
            ]
        }
    },
    {
        id: 'yelp',
        title: 'Yelp Local Business Discovery',
        category: 'location-based',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design Yelp serving millions of local searches. Must support geospatial queries, full-text search, photo uploads, review authenticity checks, personalized recommendations, and handle peak lunch/dinner traffic.',
        requirements: [
            { id: 'r1', text: 'Search businesses by location radius', targetSlots: ['slot-geo'] },
            { id: 'r2', text: 'Full-text search for business names/cuisines', targetSlots: ['slot-search'] },
            { id: 'r3', text: 'Cache popular restaurant data', targetSlots: ['slot-cache'] },
            { id: 'r4', text: 'Store business photos', targetSlots: ['slot-photos'] },
            { id: 'r5', text: 'Detect fake reviews with ML', targetSlots: ['slot-ml'] },
            { id: 'r6', text: 'Personalized recommendations', targetSlots: ['slot-rec'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 120, y: 320, label: 'Yelp App' },
                { id: 'cdn', type: 'filled', component: 'cdn', x: 320, y: 200, label: 'CDN' },
                { id: 'api', type: 'filled', component: 'server', x: 320, y: 320, label: 'API' },
                { id: 'slot-geo', type: 'slot', correctAnswers: ['geospatial-db', 'location-service'], x: 460, y: 220, label: 'Geo' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine'], x: 460, y: 440, label: 'Text' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'distributed-cache'], x: 640, y: 220, label: 'Hot Spots' },
                { id: 'slot-photos', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 640, y: 440, label: 'Photos' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['ml-model', 'content-moderation'], x: 840, y: 320, label: 'Fake Check' },
                { id: 'slot-rec', type: 'slot', correctAnswers: ['recommendation'], x: 1020, y: 320, label: 'For You' },
                { id: 'db', type: 'filled', component: 'database', x: 840, y: 520, label: 'Reviews DB' }
            ],
            edges: [
                { from: 'client', to: 'cdn', label: 'PHOTOS' },
                { from: 'client', to: 'api', label: 'SEARCH' },
                { from: 'api', to: 'slot-geo', label: 'NEARBY' },
                { from: 'api', to: 'slot-search', label: 'QUERY' },
                { from: 'slot-geo', to: 'slot-cache', label: 'CHECK' },
                { from: 'api', to: 'slot-photos', label: 'UPLOAD' },
                { from: 'api', to: 'slot-ml', label: 'REVIEW' },
                { from: 'slot-ml', to: 'db', label: 'STORE' },
                { from: 'api', to: 'slot-rec', label: 'PERSONALIZE' }
            ]
        }
    },

    // ============================================
    // VIDEO STREAMING (Complex - Real Netflix/YouTube Architecture)
    // ============================================
    {
        id: 'netflix',
        title: 'Netflix Video Streaming Platform',
        category: 'video-streaming',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design Netflix serving 200M+ subscribers globally. Must support adaptive bitrate streaming, personalized recommendations, offline downloads, multiple device sync, and handle 15% of global internet traffic during peak hours.',
        requirements: [
            { id: 'r1', text: 'Authenticate users and manage sessions', targetSlots: ['slot-auth'] },
            { id: 'r2', text: 'Serve video chunks from edge (200+ POPs)', targetSlots: ['slot-cdn'] },
            { id: 'r3', text: 'Store encoded video segments', targetSlots: ['slot-storage'] },
            { id: 'r4', text: 'Personalized content recommendations', targetSlots: ['slot-ml'] },
            { id: 'r5', text: 'Cache user profiles and watch history', targetSlots: ['slot-cache'] },
            { id: 'r6', text: 'Track viewing analytics in real-time', targetSlots: ['slot-kafka'] },
            { id: 'r7', text: 'Store user data and content catalog', targetSlots: ['slot-db'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'smart-tv', x: 100, y: 320, label: 'Smart TV' },
                { id: 'slot-auth', type: 'slot', correctAnswers: ['auth-service', 'oauth'], x: 260, y: 200, label: 'Auth' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn', 'media-cdn'], x: 260, y: 320, label: 'Edge POP' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'API Service' },
                { id: 'slot-storage', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 640, y: 200, label: 'Video Chunks' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['recommendation', 'ml-model'], x: 640, y: 320, label: 'Recommend' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'distributed-cache'], x: 820, y: 200, label: 'Profiles' },
                { id: 'slot-kafka', type: 'slot', correctAnswers: ['kafka', 'pubsub', 'event-bus'], x: 820, y: 460, label: 'Events' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['nosql', 'database'], x: 1000, y: 320, label: 'Catalog' }
            ],
            edges: [
                { from: 'client', to: 'slot-auth', label: 'LOGIN' },
                { from: 'client', to: 'slot-cdn', label: 'STREAM' },
                { from: 'slot-cdn', to: 'api', label: 'MANIFEST' },
                { from: 'slot-cdn', to: 'slot-storage', label: 'FETCH CHUNK' },
                { from: 'api', to: 'slot-ml', label: 'PERSONALIZE' },
                { from: 'api', to: 'slot-cache', label: 'PROFILE' },
                { from: 'api', to: 'slot-kafka', label: 'VIEW EVENT' },
                { from: 'slot-ml', to: 'slot-db', label: 'CONTENT' }
            ]
        }
    },
    {
        id: 'youtube',
        title: 'YouTube Video Upload & Processing',
        category: 'video-streaming',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design YouTube handling 500+ hours of video uploaded per minute. Must process videos into multiple resolutions, generate thumbnails, moderate content, enable search, and handle billions of views with monetization tracking.',
        requirements: [
            { id: 'r1', text: 'Store raw uploaded videos', targetSlots: ['slot-raw'] },
            { id: 'r2', text: 'Queue transcoding jobs', targetSlots: ['slot-queue'] },
            { id: 'r3', text: 'Transcode to multiple resolutions (4K, 1080p, 720p)', targetSlots: ['slot-transcode'] },
            { id: 'r4', text: 'Moderate content for policy violations', targetSlots: ['slot-moderate'] },
            { id: 'r5', text: 'Index videos for search', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Package HLS/DASH streams', targetSlots: ['slot-hls'] },
            { id: 'r7', text: 'Serve via global CDN', targetSlots: ['slot-cdn'] }
        ],
        path: {
            nodes: [
                { id: 'creator', type: 'filled', component: 'browser', x: 100, y: 320, label: 'Creator' },
                { id: 'upload', type: 'filled', component: 'server', x: 260, y: 320, label: 'Upload API' },
                { id: 'slot-raw', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 440, y: 200, label: 'Raw' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 440, y: 460, label: 'Jobs' },
                { id: 'slot-transcode', type: 'slot', correctAnswers: ['transcoder', 'video-encoder'], x: 640, y: 320, label: 'Encode' },
                { id: 'slot-moderate', type: 'slot', correctAnswers: ['content-moderation', 'ml-model'], x: 640, y: 520, label: 'Check' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine'], x: 820, y: 200, label: 'Index' },
                { id: 'slot-hls', type: 'slot', correctAnswers: ['hls-packager', 'worker'], x: 820, y: 320, label: 'Package' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn', 'media-cdn'], x: 1000, y: 320, label: 'Deliver' }
            ],
            edges: [
                { from: 'creator', to: 'upload', label: 'UPLOAD' },
                { from: 'upload', to: 'slot-raw', label: 'STORE RAW' },
                { from: 'upload', to: 'slot-queue', label: 'ENQUEUE' },
                { from: 'slot-queue', to: 'slot-transcode', label: 'PROCESS' },
                { from: 'slot-queue', to: 'slot-moderate', label: 'SCAN' },
                { from: 'slot-transcode', to: 'slot-search', label: 'METADATA' },
                { from: 'slot-transcode', to: 'slot-hls', label: 'SEGMENTS' },
                { from: 'slot-hls', to: 'slot-cdn', label: 'CACHE' }
            ]
        }
    },

    // ============================================
    // CHAT SYSTEMS (Complex - Real WhatsApp/Slack Architecture)
    // ============================================
    {
        id: 'whatsapp',
        title: 'WhatsApp Global Messaging',
        category: 'chat',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design WhatsApp handling 100B+ messages/day. Must support end-to-end encryption, massive group chats, real-time presence, media uploads, and offline message synchronization.',
        requirements: [
            { id: 'r1', text: 'Maintain persistent connections', targetSlots: ['slot-ws'] },
            { id: 'r2', text: 'Route messages to correct shard/user', targetSlots: ['slot-route'] },
            { id: 'r3', text: 'Store offline messages temporarily', targetSlots: ['slot-nosql'] },
            { id: 'r4', text: 'Manage user presence state', targetSlots: ['slot-presence'] },
            { id: 'r5', text: 'Store and serve media files', targetSlots: ['slot-media'] },
            { id: 'r6', text: 'Push notifications for offline users', targetSlots: ['slot-push'] },
            { id: 'r7', text: 'Archive chat history', targetSlots: ['slot-db'] }
        ],
        path: {
            nodes: [
                { id: 'user-a', type: 'filled', component: 'mobile', x: 100, y: 220, label: 'User A' },
                { id: 'user-b', type: 'filled', component: 'mobile', x: 100, y: 440, label: 'User B' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 320, label: 'LB' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'gateway'], x: 440, y: 320, label: 'Gateway' },
                { id: 'slot-route', type: 'slot', correctAnswers: ['server', 'worker'], x: 640, y: 320, label: 'Router' },
                { id: 'slot-nosql', type: 'slot', correctAnswers: ['nosql', 'database'], x: 640, y: 140, label: 'Inbox' },
                { id: 'slot-presence', type: 'slot', correctAnswers: ['cache', 'redis', 'presence'], x: 820, y: 140, label: 'Last Seen' },
                { id: 'slot-media', type: 'slot', correctAnswers: ['object-storage', 'blob-storage'], x: 820, y: 520, label: 'Media' },
                { id: 'slot-push', type: 'slot', correctAnswers: ['notification', 'push-service'], x: 1000, y: 320, label: 'Notify' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'cassandra'], x: 1000, y: 140, label: 'History' }
            ],
            edges: [
                { from: 'user-a', to: 'lb', label: 'SEND' },
                { from: 'lb', to: 'slot-ws' },
                { from: 'slot-ws', to: 'slot-route', label: 'MSG' },
                { from: 'slot-route', to: 'slot-nosql', label: 'BUFFER' },
                { from: 'slot-route', to: 'slot-presence', label: 'CHECK' },
                { from: 'slot-route', to: 'slot-push', label: 'OFFLINE' },
                { from: 'slot-route', to: 'slot-ws', label: 'DELIVER' },
                { from: 'user-a', to: 'slot-media', label: 'UPLOAD' },
                { from: 'slot-ws', to: 'user-b', label: 'PUSH' }
            ]
        }
    },
    {
        id: 'slack',
        title: 'Slack Enterprise Collaboration',
        category: 'chat',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design Slack for large enterprises. Must facilitate real-time messaging, thread management, powerful search, channel state synchronization, and integration with 3rd party apps.',
        requirements: [
            { id: 'r1', text: 'Maintain real-time channel state', targetSlots: ['slot-ws'] },
            { id: 'r2', text: 'Publish channel events', targetSlots: ['slot-queue'] },
            { id: 'r3', text: 'Store messages and threads', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Cache channel membership/metadata', targetSlots: ['slot-cache'] },
            { id: 'r5', text: 'Index messages for search', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Unfurl links and process integrations', targetSlots: ['slot-worker'] },
            { id: 'r7', text: 'Track user presence', targetSlots: ['slot-presence'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'desktop', x: 100, y: 320, label: 'Client' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'Web API' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'realtime'], x: 440, y: 140, label: 'RTM' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sharded-db'], x: 640, y: 320, label: 'Store' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'distributed-cache'], x: 640, y: 140, label: 'State' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 640, y: 520, label: 'Events' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'job-server'], x: 820, y: 520, label: 'Unfurl' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 820, y: 320, label: 'Search' },
                { id: 'slot-presence', type: 'slot', correctAnswers: ['presence', 'redis'], x: 820, y: 140, label: 'Status' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'HTTPS/WSS' },
                { from: 'lb', to: 'api' },
                { from: 'lb', to: 'slot-ws' },
                { from: 'api', to: 'slot-db', label: 'PERSIST' },
                { from: 'api', to: 'slot-cache', label: 'CONTEXT' },
                { from: 'api', to: 'slot-queue', label: 'PUBLISH' },
                { from: 'slot-queue', to: 'slot-worker', label: 'PROCESS' },
                { from: 'slot-worker', to: 'slot-search', label: 'INDEX' },
                { from: 'slot-ws', to: 'slot-presence', label: 'HEARTBEAT' }
            ]
        }
    },

    // ============================================
    // PAYMENT SYSTEMS (Complex - Real GPay/Stripe Architecture)
    // ============================================
    {
        id: 'gpay',
        title: 'Google Pay / UDP Payments',
        category: 'payment',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a high-frequency payment system like GPay/UPI. Must ensure specific ACID guarantees, zero double-spending, fraud detection, bank integration, and handle failure scenarios gracefully.',
        requirements: [
            { id: 'r1', text: 'Securely authenticate transactions', targetSlots: ['slot-auth'] },
            { id: 'r2', text: 'Manage distributed transactions (ACID)', targetSlots: ['slot-db'] },
            { id: 'r3', text: 'Prevent fraud in real-time', targetSlots: ['slot-fraud'] },
            { id: 'r4', text: 'Communicate with external banks', targetSlots: ['slot-bank'] },
            { id: 'r5', text: 'Notify users via SMS/Push', targetSlots: ['slot-notify'] },
            { id: 'r6', text: 'Persist transaction ledger', targetSlots: ['slot-ledger'] },
            { id: 'r7', text: 'Async reconciliation queue', targetSlots: ['slot-queue'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 100, y: 320, label: 'App' },
                { id: 'slot-auth', type: 'slot', correctAnswers: ['auth-service', 'oauth'], x: 260, y: 320, label: 'Auth' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'Payment API' },
                { id: 'slot-fraud', type: 'slot', correctAnswers: ['fraud-detection', 'ml-model'], x: 440, y: 140, label: 'Risk' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sharded-db'], x: 640, y: 320, label: 'Ssource of Truth' },
                { id: 'slot-bank', type: 'slot', correctAnswers: ['third-party', 'payment-gateway'], x: 640, y: 140, label: 'Bank' },
                { id: 'slot-ledger', type: 'slot', correctAnswers: ['database', 'nosql'], x: 640, y: 520, label: 'Ledger' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 820, y: 320, label: 'Reconcile' },
                { id: 'slot-notify', type: 'slot', correctAnswers: ['notification', 'sms-service'], x: 1000, y: 320, label: 'Alert' }
            ],
            edges: [
                { from: 'client', to: 'slot-auth', label: 'AUTH' },
                { from: 'slot-auth', to: 'api', label: 'TOKEN' },
                { from: 'api', to: 'slot-fraud', label: 'CHECK' },
                { from: 'api', to: 'slot-db', label: 'LOCK FUNDS' },
                { from: 'api', to: 'slot-bank', label: 'DEBIT/CREDIT' },
                { from: 'api', to: 'slot-ledger', label: 'RECORD' },
                { from: 'api', to: 'slot-queue', label: 'ASYNC' },
                { from: 'slot-queue', to: 'slot-notify', label: 'SUCCESS' }
            ]
        }
    },
    {
        id: 'stripe',
        title: 'Stripe Payment Gateway',
        category: 'payment',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a developer-friendly payment gateway API. Must handle idempotency, webhooks, subscription billing, multiple payment methods, and rigorous compliance logging.',
        requirements: [
            { id: 'r1', text: 'Enforce rate limits and API quotas', targetSlots: ['slot-rate'] },
            { id: 'r2', text: 'Ensure request idempotency', targetSlots: ['slot-cache'] },
            { id: 'r3', text: 'Route valid requests to payment processor', targetSlots: ['slot-worker'] },
            { id: 'r4', text: 'Store encrypted card data (PCI)', targetSlots: ['slot-vault'] },
            { id: 'r5', text: 'Send webhooks to merchants', targetSlots: ['slot-hook'] },
            { id: 'r6', text: 'Generate billing reports', targetSlots: ['slot-batch'] }
        ],
        path: {
            nodes: [
                { id: 'merchant', type: 'filled', component: 'server', x: 100, y: 320, label: 'Merchant' },
                { id: 'slot-rate', type: 'slot', correctAnswers: ['rate-limiter', 'api-gateway'], x: 260, y: 320, label: 'Quota' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'Stripe API' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 440, y: 140, label: 'Idempotency' },
                { id: 'slot-vault', type: 'slot', correctAnswers: ['encryption', 'database'], x: 640, y: 220, label: 'Vault' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'server'], x: 640, y: 440, label: 'Charger' },
                { id: 'bank', type: 'filled', component: 'third-party', x: 820, y: 440, label: 'Visa/MC' },
                { id: 'slot-hook', type: 'slot', correctAnswers: ['message-queue', 'event-bus'], x: 820, y: 220, label: 'Webhook' },
                { id: 'slot-batch', type: 'slot', correctAnswers: ['batch-processor', 'data-warehouse'], x: 1000, y: 320, label: 'Reports' }
            ],
            edges: [
                { from: 'merchant', to: 'slot-rate', label: 'POST /charge' },
                { from: 'slot-rate', to: 'api' },
                { from: 'api', to: 'slot-cache', label: 'CHECK KEY' },
                { from: 'api', to: 'slot-vault', label: 'TOKENIZE' },
                { from: 'api', to: 'slot-worker', label: 'PROCESS' },
                { from: 'slot-worker', to: 'bank', label: 'ACQUIRE' },
                { from: 'slot-worker', to: 'slot-hook', label: 'EVENT' },
                { from: 'slot-hook', to: 'slot-batch', label: 'LOG' }
            ]
        }
    },

    // ============================================
    // GAMING (Complex - Real LiChess/Fortnite Architecture)
    // ============================================
    {
        id: 'lichess',
        title: 'LiChess / Online Gaming Platform',
        category: 'gaming',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a low-latency online gaming platform. Must support millions of concurrent socket connections, real-time state synchronization, cheat detection, matchmaking, and leaderboards.',
        requirements: [
            { id: 'r1', text: 'Maintain WebSocket connections', targetSlots: ['slot-ws'] },
            { id: 'r2', text: 'Match players by skill (Elo)', targetSlots: ['slot-match'] },
            { id: 'r3', text: 'Sync game state in memory', targetSlots: ['slot-state'] },
            { id: 'r4', text: 'Persist finished games', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Analyze moves for cheating', targetSlots: ['slot-analyze'] },
            { id: 'r6', text: 'Update real-time leaderboards', targetSlots: ['slot-rank'] }
        ],
        path: {
            nodes: [
                { id: 'p1', type: 'filled', component: 'browser', x: 100, y: 220, label: 'Player 1' },
                { id: 'p2', type: 'filled', component: 'browser', x: 100, y: 440, label: 'Player 2' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'gateway'], x: 320, y: 320, label: 'Socket' },
                { id: 'slot-match', type: 'slot', correctAnswers: ['worker', 'redis'], x: 520, y: 140, label: 'Match' },
                { id: 'slot-state', type: 'slot', correctAnswers: ['cache', 'redis', 'server'], x: 520, y: 520, label: 'Game State' },
                { id: 'api', type: 'filled', component: 'server', x: 700, y: 320, label: 'Game API' },
                { id: 'slot-analyze', type: 'slot', correctAnswers: ['ml-model', 'worker'], x: 860, y: 220, label: 'Anti-Cheat' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql'], x: 860, y: 440, label: 'PGN Store' },
                { id: 'slot-rank', type: 'slot', correctAnswers: ['cache', 'redis'], x: 1040, y: 320, label: 'Rankings' }
            ],
            edges: [
                { from: 'p1', to: 'slot-ws', label: 'MOVE e4' },
                { from: 'p2', to: 'slot-ws', label: 'MOVE e5' },
                { from: 'slot-ws', to: 'slot-state', label: 'UPDATE' },
                { from: 'slot-ws', to: 'slot-match', label: 'FIND' },
                { from: 'slot-state', to: 'api', label: 'GAME OVER' },
                { from: 'api', to: 'slot-db', label: 'SAVE' },
                { from: 'api', to: 'slot-analyze', label: 'VERIFY' },
                { from: 'api', to: 'slot-rank', label: 'UPDATE ELO' }
            ]
        }
    },

    // ============================================
    // RECOMMENDATION (2 problems)
    // ============================================
    // ============================================
    // RECOMMENDATION (2 problems)
    // ============================================
    {
        id: 'spotify',
        title: 'Spotify Audio Streaming',
        category: 'recommendation',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a global music streaming service. Low latency playback, copyright management, personalized discovery, and offline sync.',
        requirements: [
            { id: 'r1', text: 'Deliver Audio Segments (CDN)', targetSlots: ['slot-cdn'] },
            { id: 'r2', text: 'Manage DRM & Rights', targetSlots: ['slot-drm'] },
            { id: 'r3', text: 'User Taste Profile (ML)', targetSlots: ['slot-ml'] },
            { id: 'r4', text: 'Real-time Playback Analytics', targetSlots: ['slot-analytics'] },
            { id: 'r5', text: 'Metadata Search (Track/Artist)', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Offline Sync Management', targetSlots: ['slot-db'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'mobile', x: 100, y: 320, label: 'Spotify App' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 480, y: 320, label: 'API' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn', 'media-cdn'], x: 280, y: 140, label: 'Edge Net' },
                { id: 'slot-drm', type: 'slot', correctAnswers: ['server', 'worker'], x: 480, y: 140, label: 'License' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['ml-model', 'recommendation'], x: 680, y: 320, label: 'Discover' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 680, y: 520, label: 'Search' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'cassandra'], x: 480, y: 520, label: 'Meta Store' },
                { id: 'slot-analytics', type: 'slot', correctAnswers: ['analytics', 'kafka'], x: 880, y: 320, label: 'Events' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'PLAY' },
                { from: 'lb', to: 'api' },
                { from: 'client', to: 'slot-cdn', label: 'STREAM' },
                { from: 'api', to: 'slot-drm', label: 'CHECK RIGHTS' },
                { from: 'api', to: 'slot-ml', label: 'GET MIX' },
                { from: 'api', to: 'slot-search', label: 'QUERY' },
                { from: 'api', to: 'slot-db', label: 'FETCH META' },
                { from: 'api', to: 'slot-analytics', label: 'LOG' }
            ]
        }
    },
    {
        id: 'amazon-recs',
        title: 'Amazon Personalized Recs',
        category: 'recommendation',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design the product recommendation engine for Amazon.com. "Customers who bought this also bought...", session-based real-time suggestions, and email campaigns.',
        requirements: [
            { id: 'r1', text: 'Ingest User Clickstream', targetSlots: ['slot-stream'] },
            { id: 'r2', text: 'Item-to-Item Collab Filtering', targetSlots: ['slot-model'] },
            { id: 'r3', text: 'Store Product Data', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Pre-compute Recs (Batch)', targetSlots: ['slot-batch'] },
            { id: 'r5', text: 'Serve Real-time Recs', targetSlots: ['slot-cache'] },
            { id: 'r6', text: 'A/B Testing Framework', targetSlots: ['slot-ab'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'Shopper' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 480, y: 320, label: 'Recs Svc' },
                { id: 'slot-stream', type: 'slot', correctAnswers: ['kafka', 'message-queue'], x: 280, y: 520, label: 'Clicks' },
                { id: 'slot-model', type: 'slot', correctAnswers: ['ml-model', 'recommendation'], x: 880, y: 140, label: 'Model' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'nosql'], x: 680, y: 320, label: 'Catalog' },
                { id: 'slot-batch', type: 'slot', correctAnswers: ['batch-processor', 'spark'], x: 680, y: 520, label: 'Offline Job' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'dynamodb', 'redis'], x: 480, y: 140, label: 'Hot Recs' },
                { id: 'slot-ab', type: 'slot', correctAnswers: ['analytics', 'server'], x: 880, y: 320, label: 'Expt' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'VIEW' },
                { from: 'lb', to: 'api' },
                { from: 'client', to: 'slot-stream', label: 'ACTION' },
                { from: 'slot-stream', to: 'slot-batch', label: 'TRAIN' },
                { from: 'slot-batch', to: 'slot-model', label: 'UPDATE' },
                { from: 'slot-batch', to: 'slot-cache', label: 'PRELOAD' },
                { from: 'api', to: 'slot-cache', label: 'FETCH' },
                { from: 'api', to: 'slot-ab', label: 'VARIANT' },
                { from: 'api', to: 'slot-db', label: 'DETAILS' }
            ]
        }
    },

    // ============================================
    // EMAIL (2 problems)
    // ============================================
    {
        id: 'gmail',
        title: 'Gmail / Outlook Architecture',
        category: 'emailing',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a scalable email service. Protocol handling (SMTP/IMAP/POP), spam filtering, virus scanning, full-text search, and attachment storage.',
        requirements: [
            { id: 'r1', text: 'Inbound Mail Queue (SMTP)', targetSlots: ['slot-queue'] },
            { id: 'r2', text: 'Anti-Spam / Virus Scan', targetSlots: ['slot-ml'] },
            { id: 'r3', text: 'Store Email Metadata', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Store Attachments (Blobs)', targetSlots: ['slot-blob'] },
            { id: 'r5', text: 'Index Content for Search', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Outbound Delivery', targetSlots: ['slot-worker'] }
        ],
        path: {
            nodes: [
                { id: 'client', type: 'filled', component: 'browser', x: 100, y: 320, label: 'Webmail' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 280, y: 320, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 320, label: 'API' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'kafka'], x: 440, y: 140, label: 'Inbound' },
                { id: 'slot-ml', type: 'slot', correctAnswers: ['ml-model', 'content-moderation'], x: 620, y: 140, label: 'Filter' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'sql', 'bigtable'], x: 620, y: 320, label: 'Meta DB' },
                { id: 'slot-blob', type: 'slot', correctAnswers: ['object-storage', 's3'], x: 820, y: 320, label: 'Attach' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 820, y: 520, label: 'Index' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'server'], x: 440, y: 520, label: 'MTA' }
            ],
            edges: [
                { from: 'client', to: 'lb', label: 'SEND/READ' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-worker', label: 'SEND OUT' },
                { from: 'slot-queue', to: 'slot-ml', label: 'PROCESS' },
                { from: 'slot-ml', to: 'slot-db', label: 'SAVE' },
                { from: 'slot-db', to: 'slot-blob', label: 'STORE' },
                { from: 'slot-db', to: 'slot-search', label: 'INDEX' }
            ]
        }
    },

    // ============================================  
    // CONFERENCING (2 problems)
    // ============================================
    {
        id: 'zoom',
        title: 'Zoom / Meet Architecture',
        category: 'conferencing',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1200,
        description: 'Design a video conferencing system. Focus on low latency, adaptive bitrate, handling packet loss, and mixing streams (SFU vs MCU).',
        requirements: [
            { id: 'r1', text: 'Global Signaling (Join/Leave)', targetSlots: ['slot-signal'] },
            { id: 'r2', text: 'Media Routing (SFU)', targetSlots: ['slot-sfu'] },
            { id: 'r3', text: 'Transcoding / Recording', targetSlots: ['slot-worker'] },
            { id: 'r4', text: 'Store Recordings', targetSlots: ['slot-blob'] },
            { id: 'r5', text: 'Presence / User State', targetSlots: ['slot-cache'] },
            { id: 'r6', text: 'Data Channel (Chat)', targetSlots: ['slot-ws'] }
        ],
        path: {
            nodes: [
                { id: 'u1', type: 'filled', component: 'desktop', x: 100, y: 200, label: 'Host' },
                { id: 'u2', type: 'filled', component: 'mobile', x: 100, y: 440, label: 'Guest' },
                { id: 'slot-signal', type: 'slot', correctAnswers: ['server', 'websocket'], x: 300, y: 320, label: 'Signal' },
                { id: 'slot-sfu', type: 'slot', correctAnswers: ['stream-server', 'router'], x: 500, y: 320, label: 'SFU' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['redis', 'cache'], x: 300, y: 140, label: 'Rooms' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'gateway'], x: 500, y: 520, label: 'Chat' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'video-encoder'], x: 740, y: 320, label: 'Recorder' },
                { id: 'slot-blob', type: 'slot', correctAnswers: ['object-storage', 's3'], x: 920, y: 320, label: 'Cloud' }
            ],
            edges: [
                { from: 'u1', to: 'slot-signal', label: 'JOIN' },
                { from: 'u2', to: 'slot-signal', label: 'JOIN' },
                { from: 'slot-signal', to: 'slot-cache', label: 'VALIDATE' },
                { from: 'u1', to: 'slot-sfu', label: 'RTP' },
                { from: 'u2', to: 'slot-sfu', label: 'RTP' },
                { from: 'slot-sfu', to: 'slot-worker', label: 'COPY' },
                { from: 'slot-worker', to: 'slot-blob', label: 'SAVE' },
                { from: 'u1', to: 'slot-ws', label: 'MSG' }
            ]
        }
    },

    // ============================================
    // COLLABORATIVE (Complex - Real Google Docs Architecture)
    // ============================================
    {
        id: 'google-docs',
        title: 'Google Docs Real-time Collaboration',
        category: 'collaborative',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a real-time collaborative editor. Must support Operational Transformation (OT) or CRDTs to handle concurrent edits, offline support, and version history.',
        requirements: [
            { id: 'r1', text: 'Handle WebSocket connections for editing', targetSlots: ['slot-ws'] },
            { id: 'r2', text: 'Process concurrent edits (OT/CRDT)', targetSlots: ['slot-ot'] },
            { id: 'r3', text: 'Persist document snapshots', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Log operations for history', targetSlots: ['slot-log'] },
            { id: 'r5', text: 'Cache active documents', targetSlots: ['slot-cache'] },
            { id: 'r6', text: 'Export/Convert documents', targetSlots: ['slot-worker'] }
        ],
        path: {
            nodes: [
                { id: 'user1', type: 'filled', component: 'browser', x: 100, y: 220, label: 'Editor A' },
                { id: 'user2', type: 'filled', component: 'browser', x: 100, y: 440, label: 'Editor B' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 320, label: 'LB' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'gateway'], x: 440, y: 320, label: 'Socket' },
                { id: 'slot-ot', type: 'slot', correctAnswers: ['server', 'worker'], x: 640, y: 320, label: 'OT Engine' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 640, y: 140, label: 'Hot Doc' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['nosql', 'database'], x: 820, y: 320, label: 'Snapshots' },
                { id: 'slot-log', type: 'slot', correctAnswers: ['change-data', 'database'], x: 820, y: 520, label: 'Op Log' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'server'], x: 1000, y: 320, label: 'PDF Export' }
            ],
            edges: [
                { from: 'user1', to: 'lb', label: 'TYPE' },
                { from: 'user2', to: 'lb', label: 'TYPE' },
                { from: 'lb', to: 'slot-ws' },
                { from: 'slot-ws', to: 'slot-ot', label: 'OP' },
                { from: 'slot-ot', to: 'slot-cache', label: 'UPDATE' },
                { from: 'slot-ot', to: 'slot-db', label: 'SAVE' },
                { from: 'slot-ot', to: 'slot-log', label: 'APPEND' },
                { from: 'slot-ot', to: 'slot-worker', label: 'JOB' },
                { from: 'slot-ot', to: 'slot-ws', label: 'BROADCAST' }
            ]
        }
    },

    // ============================================
    // SOCIAL MEDIA (Ultra-Complex)
    // ============================================
    {
        id: 'twitter',
        title: 'Twitter / X Timeline',
        category: 'social',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a scalable news feed system handling 500k QPS. Must support "Hybrid Fan-out" (push for users, pull for celebs), real-time trends, full-text search, and ad injection.',
        requirements: [
            { id: 'r1', text: 'Hybrid Fan-out (Push/Pull)', targetSlots: ['slot-service'] },
            { id: 'r2', text: 'Store Timeline in Redis clusters', targetSlots: ['slot-cache'] },
            { id: 'r3', text: 'Persist tweets (Cassandra/Manhattan)', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Compute trending hashtags', targetSlots: ['slot-trends'] },
            { id: 'r5', text: 'Index tweets for search', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Manage Social Graph (FlockDB)', targetSlots: ['slot-graph'] },
            { id: 'r7', text: 'Inject ads into timeline', targetSlots: ['slot-ads'] }
        ],
        path: {
            nodes: [
                { id: 'user', type: 'filled', component: 'mobile', x: 100, y: 400, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 400, label: 'LB' },
                { id: 'api', type: 'filled', component: 'server', x: 440, y: 400, label: 'Tweet Svc' },
                { id: 'slot-service', type: 'slot', correctAnswers: ['worker', 'server'], x: 640, y: 220, label: 'Fanout' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 820, y: 220, label: 'Home Cache' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'cassandra', 'nosql'], x: 640, y: 400, label: 'Tweet Store' },
                { id: 'slot-graph', type: 'slot', correctAnswers: ['graph-db', 'database', 'sql'], x: 640, y: 560, label: 'Graph DB' },
                { id: 'slot-trends', type: 'slot', correctAnswers: ['stream-processor', 'spark', 'analytics'], x: 820, y: 700, label: 'Trends' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 1000, y: 400, label: 'Search' },
                { id: 'slot-ads', type: 'slot', correctAnswers: ['server', 'recommendation'], x: 820, y: 520, label: 'Ad Server' }
            ],
            edges: [
                { from: 'user', to: 'lb', label: 'POST' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-db', label: 'PERSIST' },
                { from: 'api', to: 'slot-service', label: 'ASYNC' },
                { from: 'slot-service', to: 'slot-cache', label: 'PUSH' },
                { from: 'slot-service', to: 'slot-graph', label: 'FETCH FOLLOW' },
                { from: 'api', to: 'slot-search', label: 'INDEX' },
                { from: 'api', to: 'slot-trends', label: 'STREAM' },
                { from: 'slot-cache', to: 'slot-ads', label: 'MIX ADS' },
                { from: 'user', to: 'slot-cache', label: 'READ FEED' }
            ]
        }
    },
    {
        id: 'instagram',
        title: 'Instagram Feed & Stories',
        category: 'social',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a photo-sharing platform. Process 100M+ photo uploads/day, generate 3 resolutions, store metadata, rank feeds, and handle 24h ephemeral stories.',
        requirements: [
            { id: 'r1', text: 'Handle high-res image uploads', targetSlots: ['slot-upload'] },
            { id: 'r2', text: 'Process/Resize images async', targetSlots: ['slot-worker'] },
            { id: 'r3', text: 'Store raw & processed blobs', targetSlots: ['slot-blob'] },
            { id: 'r4', text: 'Global Content Delivery', targetSlots: ['slot-cdn'] },
            { id: 'r5', text: 'Sharded Metadata (User/Photo)', targetSlots: ['slot-db'] },
            { id: 'r6', text: 'Feed Ranking Service', targetSlots: ['slot-rank'] },
            { id: 'r7', text: 'Stories (Ephemeral) State', targetSlots: ['slot-stories'] }
        ],
        path: {
            nodes: [
                { id: 'user', type: 'filled', component: 'mobile', x: 100, y: 400, label: 'Mobile' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 260, y: 400, label: 'Gateway' },
                { id: 'slot-upload', type: 'slot', correctAnswers: ['server', 'upload-service'], x: 440, y: 400, label: 'Upload' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'batch-processor'], x: 440, y: 220, label: 'Resizer' },
                { id: 'slot-blob', type: 'slot', correctAnswers: ['object-storage', 's3'], x: 640, y: 220, label: 'Blob Store' },
                { id: 'slot-cdn', type: 'slot', correctAnswers: ['cdn', 'media-cdn'], x: 820, y: 220, label: 'CDN' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'postgres', 'nosql'], x: 640, y: 400, label: 'Meta Shard' },
                { id: 'slot-rank', type: 'slot', correctAnswers: ['ml-model', 'recommendation'], x: 820, y: 400, label: 'Ranker' },
                { id: 'slot-stories', type: 'slot', correctAnswers: ['cache', 'redis', 'cassandra'], x: 640, y: 560, label: 'Stories' },
                { id: 'analytics', type: 'filled', component: 'analytics', x: 820, y: 560, label: 'Analytics' }
            ],
            edges: [
                { from: 'user', to: 'lb', label: 'ACT' },
                { from: 'lb', to: 'slot-upload', label: 'ROUTE' },
                { from: 'slot-upload', to: 'slot-worker', label: 'JOB' },
                { from: 'slot-worker', to: 'slot-blob', label: 'SAVE' },
                { from: 'slot-blob', to: 'slot-cdn', label: 'DISTRIBUTE' },
                { from: 'slot-upload', to: 'slot-db', label: 'METADATA' },
                { from: 'slot-db', to: 'slot-rank', label: 'CANDIDATES' },
                { from: 'slot-rank', to: 'user', label: 'FEED' },
                { from: 'slot-upload', to: 'slot-stories', label: 'STORY' },
                { from: 'slot-stories', to: 'analytics', label: 'LOG' }
            ]
        }
    },

    // ============================================
    // WEB CRAWLER & BOOKING (Ultra-Complex)
    // ============================================
    {
        id: 'web-crawler',
        title: 'Google Web Crawler',
        category: 'search',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a distributed web crawler system. Must parse 1B+ pages/day, handle robots.txt politeness, respect crawl budgets, deduplicate content, and feed a search index.',
        requirements: [
            { id: 'r1', text: 'Prioritize URLs (PageRank/Freshness)', targetSlots: ['slot-frontier'] },
            { id: 'r2', text: 'Resolve IP & Check Robots.txt', targetSlots: ['slot-dns'] },
            { id: 'r3', text: 'Fetch HTML (Headless/Static)', targetSlots: ['slot-fetch'] },
            { id: 'r4', text: 'Check Content Checksum (Dedup)', targetSlots: ['slot-dedup'] },
            { id: 'r5', text: 'Parse Links & Extract Text', targetSlots: ['slot-parse'] },
            { id: 'r6', text: 'Reverse Index Construction', targetSlots: ['slot-index'] },
            { id: 'r7', text: 'Store Raw Document Data', targetSlots: ['slot-store'] }
        ],
        path: {
            nodes: [
                { id: 'seed', type: 'filled', component: 'server', x: 100, y: 340, label: 'Seeds' },
                { id: 'slot-frontier', type: 'slot', correctAnswers: ['message-queue', 'kafka', 'priority-queue'], x: 320, y: 340, label: 'Frontier' },
                { id: 'slot-dns', type: 'slot', correctAnswers: ['dns', 'cache'], x: 320, y: 560, label: 'DNS/Robots' },
                { id: 'slot-fetch', type: 'slot', correctAnswers: ['worker', 'server'], x: 560, y: 340, label: 'Fetcher' },
                { id: 'slot-dedup', type: 'slot', correctAnswers: ['bloom-filter', 'redis'], x: 560, y: 140, label: 'Dedup' },
                { id: 'slot-parse', type: 'slot', correctAnswers: ['batch-processor', 'worker'], x: 820, y: 340, label: 'Parser' },
                { id: 'slot-store', type: 'slot', correctAnswers: ['bigtable', 'object-storage'], x: 1040, y: 560, label: 'DocDB' },
                { id: 'slot-index', type: 'slot', correctAnswers: ['search-engine', 'elasticsearch'], x: 1040, y: 140, label: 'Indexer' },
                { id: 'analytics', type: 'filled', component: 'analytics', x: 1220, y: 340, label: 'Budget' }
            ],
            edges: [
                { from: 'seed', to: 'slot-frontier', label: 'INJECT' },
                { from: 'slot-frontier', to: 'slot-fetch', label: 'DEQUEUE' },
                { from: 'slot-fetch', to: 'slot-dns', label: 'RESOLVE' },
                { from: 'slot-fetch', to: 'slot-parse', label: 'HTML' },
                { from: 'slot-fetch', to: 'slot-dedup', label: 'CHECK' },
                { from: 'slot-parse', to: 'slot-store', label: 'SAVE' },
                { from: 'slot-parse', to: 'slot-index', label: 'INDEX' },
                { from: 'slot-parse', to: 'analytics', label: 'STATS' },
                { from: 'slot-parse', to: 'slot-frontier', label: 'NEW LINKS' }
            ]
        }
    },
    {
        id: 'ticketmaster',
        title: 'Ticketmaster / BookMyShow',
        category: 'booking',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a high-concurrency booking system for Taylor Swift concerts. Handle 1M+ waiting users, prevent overselling using distributed locks, and process payments securely.',
        requirements: [
            { id: 'r1', text: 'Fair Virtual Waiting Room', targetSlots: ['slot-queue'] },
            { id: 'r2', text: 'View Real-time Seat Map', targetSlots: ['slot-cache'] },
            { id: 'r3', text: 'Atomic Seat Reservation (Lock)', targetSlots: ['slot-lock'] },
            { id: 'r4', text: 'Payment Processing (Idempotency)', targetSlots: ['slot-pay'] },
            { id: 'r5', text: 'Permanent Booking Record', targetSlots: ['slot-db'] },
            { id: 'r6', text: 'Async Ticket PDF Generation', targetSlots: ['slot-worker'] },
            { id: 'r7', text: 'Fraud Detection / Scalper Check', targetSlots: ['slot-fraud'] }
        ],
        path: {
            nodes: [
                { id: 'user', type: 'filled', component: 'browser', x: 100, y: 340, label: 'Fan' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 320, y: 340, label: 'LB' },
                { id: 'slot-queue', type: 'slot', correctAnswers: ['message-queue', 'waiting-room'], x: 520, y: 340, label: 'Queue' },
                { id: 'api', type: 'filled', component: 'server', x: 720, y: 340, label: 'Booking API' },
                { id: 'slot-cache', type: 'slot', correctAnswers: ['cache', 'redis'], x: 720, y: 140, label: 'Seat Map' },
                { id: 'slot-fraud', type: 'slot', correctAnswers: ['ml-model', 'server'], x: 520, y: 560, label: 'Anti-Bot' },
                { id: 'slot-lock', type: 'slot', correctAnswers: ['redis', 'zookeeper', 'dynamodb'], x: 920, y: 140, label: 'Dist Lock' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['database', 'postgres'], x: 920, y: 340, label: 'Orders' },
                { id: 'slot-pay', type: 'slot', correctAnswers: ['payment-gateway'], x: 1140, y: 340, label: 'Stripe' },
                { id: 'slot-worker', type: 'slot', correctAnswers: ['worker', 'notification'], x: 1140, y: 560, label: 'Email PDF' }
            ],
            edges: [
                { from: 'user', to: 'lb', label: 'JOIN' },
                { from: 'lb', to: 'slot-queue', label: 'THROTTLE' },
                { from: 'slot-queue', to: 'api', label: 'ADMIT' },
                { from: 'api', to: 'slot-fraud', label: 'CHECK' },
                { from: 'api', to: 'slot-cache', label: 'GET MAP' },
                { from: 'api', to: 'slot-lock', label: 'ACQUIRE' },
                { from: 'api', to: 'slot-db', label: 'RESERVE' },
                { from: 'api', to: 'slot-pay', label: 'CHARGE' },
                { from: 'slot-db', to: 'slot-worker', label: 'CONFIRM' }
            ]
        }
    },

    // ============================================
    // MATCHING & GAMING COMMS (Ultra-Complex)
    // ============================================
    {
        id: 'tinder',
        title: 'Tinder / Dating App',
        category: 'social',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a dating app handling 2B swipes/day. Features: Geospatial sharding (S2), Super Likes, real-time match sockets, and swipe analytics features.',
        requirements: [
            { id: 'r1', text: 'Geo-sharded Location Index (S2)', targetSlots: ['slot-geo'] },
            { id: 'r2', text: 'Matchmaking / Scoring Service', targetSlots: ['slot-score'] },
            { id: 'r3', text: 'Atomic Swipe/Match Logic', targetSlots: ['slot-db'] },
            { id: 'r4', text: 'Profile/Photo Storage (CDN)', targetSlots: ['slot-blob'] },
            { id: 'r5', text: 'Real-time Chat / Match Notify', targetSlots: ['slot-ws'] },
            { id: 'r6', text: 'Swipe Analytics / Data Lake', targetSlots: ['slot-lake'] }
        ],
        path: {
            nodes: [
                { id: 'user', type: 'filled', component: 'mobile', x: 100, y: 340, label: 'User' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 320, y: 340, label: 'Gateway' },
                { id: 'api', type: 'filled', component: 'server', x: 520, y: 340, label: 'API' },
                { id: 'slot-geo', type: 'slot', correctAnswers: ['geospatial-db', 'redis', 'location-service'], x: 520, y: 140, label: 'Geo Index' },
                { id: 'slot-score', type: 'slot', correctAnswers: ['ml-model', 'recommendation'], x: 720, y: 140, label: 'Scorer' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['nosql', 'dynamodb'], x: 720, y: 340, label: 'Matches' },
                { id: 'slot-blob', type: 'slot', correctAnswers: ['object-storage', 'cdn'], x: 720, y: 560, label: 'Photos' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'push-service'], x: 920, y: 340, label: 'Socket' },
                { id: 'slot-lake', type: 'slot', correctAnswers: ['data-warehouse', 'hadoop'], x: 920, y: 560, label: 'Analytics' },
                { id: 'chat-shard', type: 'filled', component: 'database', x: 1140, y: 340, label: 'Chat DB' }
            ],
            edges: [
                { from: 'user', to: 'lb', label: 'SWIPE' },
                { from: 'lb', to: 'api' },
                { from: 'api', to: 'slot-geo', label: 'UPDATE LOC' },
                { from: 'api', to: 'slot-score', label: 'GET RECS' },
                { from: 'api', to: 'slot-db', label: 'RECORD' },
                { from: 'slot-db', to: 'slot-ws', label: 'NOTIFY' },
                { from: 'slot-ws', to: 'chat-shard', label: 'SYNC MSG' },
                { from: 'api', to: 'slot-blob', label: 'FETCH' },
                { from: 'api', to: 'slot-lake', label: 'LOG' }
            ]
        }
    },
    {
        id: 'discord',
        title: 'Discord Chat & Voice',
        category: 'chat',
        difficulty: 'Hard',
        isFree: true,
        timeLimit: 1500,
        description: 'Design a gaming chat platform. Key challenges: 10M+ concurrent users, Etcd for consistent hashing (Service Discovery), Guild sharding, and real-time voice routing.',
        requirements: [
            { id: 'r1', text: 'Gateway (WebSocket) Scaling', targetSlots: ['slot-ws'] },
            { id: 'r2', text: 'Service Discovery / Ring Hash', targetSlots: ['slot-etcd'] },
            { id: 'r3', text: 'Guild State Service (Presence)', targetSlots: ['slot-state'] },
            { id: 'r4', text: 'Cassandra Message Store', targetSlots: ['slot-db'] },
            { id: 'r5', text: 'Full-text Search (Elastic)', targetSlots: ['slot-search'] },
            { id: 'r6', text: 'Voice Router (SFU/Selective)', targetSlots: ['slot-voice'] }
        ],
        path: {
            nodes: [
                { id: 'user', type: 'filled', component: 'desktop', x: 100, y: 340, label: 'Gamer' },
                { id: 'lb', type: 'filled', component: 'load-balancer', x: 320, y: 340, label: 'LB' },
                { id: 'slot-ws', type: 'slot', correctAnswers: ['websocket', 'gateway'], x: 520, y: 220, label: 'Socket GW' },
                { id: 'api', type: 'filled', component: 'server', x: 520, y: 460, label: 'Rest API' },
                { id: 'slot-etcd', type: 'slot', correctAnswers: ['service-discovery', 'zookeeper', 'etcd'], x: 720, y: 340, label: 'Etcd' },
                { id: 'slot-state', type: 'slot', correctAnswers: ['cache', 'redis'], x: 720, y: 140, label: 'Guild State' },
                { id: 'slot-voice', type: 'slot', correctAnswers: ['stream-server', 'server'], x: 920, y: 140, label: 'Voice Node' },
                { id: 'slot-db', type: 'slot', correctAnswers: ['cassandra', 'scylladb'], x: 920, y: 460, label: 'ScyllaDB' },
                { id: 'slot-search', type: 'slot', correctAnswers: ['elasticsearch', 'search-engine'], x: 1140, y: 460, label: 'Index' },
                { id: 'notifications', type: 'filled', component: 'notification', x: 920, y: 700, label: 'Push' }
            ],
            edges: [
                { from: 'user', to: 'lb', label: 'CONNECT' },
                { from: 'lb', to: 'slot-ws', label: 'WSS' },
                { from: 'lb', to: 'api', label: 'HTTP' },
                { from: 'slot-ws', to: 'slot-etcd', label: 'LOOKUP' },
                { from: 'slot-ws', to: 'slot-state', label: 'SYNC' },
                { from: 'api', to: 'slot-etcd', label: 'ROUTE' },
                { from: 'api', to: 'slot-db', label: 'SAVE' },
                { from: 'slot-db', to: 'slot-search', label: 'INDEX' },
                { from: 'slot-ws', to: 'slot-voice', label: 'JOIN' },
                { from: 'api', to: 'notifications', label: 'ALERT' }
            ]
        }
    }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { COMPONENTS, CATEGORIES, PROBLEMS };
}
