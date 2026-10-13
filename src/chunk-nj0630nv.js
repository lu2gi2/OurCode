import { Oe } from "/$bunfs/root/chunk-j27d47mr.js";
import { lt, B, eo, ysn, _sn, Ce } from "/$bunfs/root/chunk-ctt36bn8.js";
import { d } from "/$bunfs/root/chunk-wkmq9ht0.js";
import { x } from "/$bunfs/root/chunk-m1rt7wpr.js";
import { a } from "/$bunfs/root/chunk-dp4xqs6t.js";
import { p } from "/$bunfs/root/chunk-5k7wva7c.js";
import { Ht, ZRs } from "/$bunfs/root/chunk-77t63btp.js";
import { o, E, M, T, u, Ue, ue, U, A } from "/$bunfs/root/chunk-smx21d0k.js";
const UTr = {
    "//": "Hand-maintained baked-in model catalog — the source of truth for per-model provider IDs and metadata. On model launch add one entry to `models` below; `bun run generate:model-catalog` validates this file against the schema and formats it.",
    schema_version: 1,
    pricing_tiers: {
        tier_2_10: {
            input: 2,
            output: 10,
            cache_write_5m: 2.5,
            cache_write_1h: 4,
            cache_read: 0.2,
            web_search: 0.01
        },
        tier_2_10_cache_read_0_10: {
            input: 2,
            output: 10,
            cache_write_5m: 2.5,
            cache_write_1h: 4,
            cache_read: 0.1,
            web_search: 0.01
        },
        tier_3_15: {
            input: 3,
            output: 15,
            cache_write_5m: 3.75,
            cache_write_1h: 6,
            cache_read: 0.3,
            web_search: 0.01
        },
        tier_5_25: {
            input: 5,
            output: 25,
            cache_write_5m: 6.25,
            cache_write_1h: 10,
            cache_read: 0.5,
            web_search: 0.01
        },
        tier_15_75: {
            input: 15,
            output: 75,
            cache_write_5m: 18.75,
            cache_write_1h: 30,
            cache_read: 1.5,
            web_search: 0.01
        },
        tier_10_50: {
            input: 10,
            output: 50,
            cache_write_5m: 12.5,
            cache_write_1h: 20,
            cache_read: 1,
            web_search: 0.01
        },
        tier_10_50_cache_read_0_25: {
            input: 10,
            output: 50,
            cache_write_5m: 12.5,
            cache_write_1h: 20,
            cache_read: 0.25,
            web_search: 0.01
        },
        tier_4_20_cache_read_0_20: {
            input: 4,
            output: 20,
            cache_write_5m: 5,
            cache_write_1h: 8,
            cache_read: 0.2,
            web_search: 0.01
        },
        haiku_35: {
            input: 0.8,
            output: 4,
            cache_write_5m: 1,
            cache_write_1h: 1.6,
            cache_read: 0.08,
            web_search: 0.01
        },
        haiku_45: {
            input: 1,
            output: 5,
            cache_write_5m: 1.25,
            cache_write_1h: 2,
            cache_read: 0.1,
            web_search: 0.01
        },
        haiku_55: {
            input: 0.1,
            output: 0.5,
            cache_write_5m: 0.125,
            cache_write_1h: 0.2,
            cache_read: 0.01,
            web_search: 0.01,
            long_prompt: {
                above_prompt_tokens: 100000,
                input: 0.5,
                output: 2.5,
                cache_write_5m: 0.625,
                cache_write_1h: 1,
                cache_read: 0.05
            }
        }
    },
    models: [
        {
            id: "claude-3-5-haiku",
            family: "haiku",
            display_name: "Haiku 3.5",
            provider_ids: {
                first_party: "claude-3-5-haiku-20241022",
                bedrock: "us.anthropic.claude-3-5-haiku-20241022-v1:0",
                vertex: "claude-3-5-haiku@20241022",
                foundry: "claude-3-5-haiku",
                anthropic_aws: "claude-3-5-haiku-20241022",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-3-5-haiku-20241022"
            },
            eager_input_streaming: {
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_HAIKU",
            max_output_tokens: {
                default: 8192,
                upper: 8192
            },
            pricing: "haiku_35",
            capabilities: []
        },
        {
            id: "claude-haiku-4-5",
            family: "haiku",
            display_name: "Haiku 4.5",
            knowledge_cutoff: "February 2025",
            provider_ids: {
                first_party: "claude-haiku-4-5-20251001",
                bedrock: "us.anthropic.claude-haiku-4-5-20251001-v1:0",
                vertex: "claude-haiku-4-5@20251001",
                foundry: "claude-haiku-4-5",
                anthropic_aws: "claude-haiku-4-5-20251001",
                anthropic_google_cloud: "claude-haiku-4-5-20251001",
                mantle: "anthropic.claude-haiku-4-5",
                gateway: "claude-haiku-4-5-20251001"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_4_5",
            context: {
                window: 200000,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 64000
            },
            pricing: "haiku_45",
            capabilities: [
                "context_management"
            ],
            advisor_rank: 1
        },
        {
            id: "claude-haiku-5-5",
            family: "haiku",
            display_name: "Haiku 5.5",
            knowledge_cutoff: "June 2026",
            provider_ids: {
                first_party: "claude-haiku-5-5",
                bedrock: "us.anthropic.claude-haiku-5-5",
                vertex: "claude-haiku-5-5",
                foundry: "claude-haiku-5-5",
                anthropic_aws: "claude-haiku-5-5",
                anthropic_google_cloud: "claude-haiku-5-5",
                mantle: "anthropic.claude-haiku-5-5"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_HAIKU_5_5",
            fallback_3p: "claude-haiku-4-5",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 128000,
                upper: 128000
            },
            pricing: "haiku_55",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "mid_conv_tool_change",
                "context_management",
                "rejects_disabled_thinking",
                "per_turn_effort",
                "lean_prompt",
                "org_locked_thinking",
                "haiku_5_5_early_stopping_guidance"
            ],
            default_effort: "medium",
            advisor_rank: 4
        },
        {
            id: "claude-3-5-sonnet",
            family: "sonnet",
            display_name: "Sonnet 3.5",
            provider_ids: {
                first_party: "claude-3-5-sonnet-20241022",
                bedrock: "us.anthropic.claude-3-5-sonnet-20241022-v2:0",
                vertex: "claude-3-5-sonnet-v2@20241022",
                foundry: "claude-3-5-sonnet",
                anthropic_aws: "claude-3-5-sonnet-20241022",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-3-5-sonnet-20241022"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_5_SONNET",
            max_output_tokens: {
                default: 8192,
                upper: 8192
            },
            pricing: "tier_3_15",
            capabilities: []
        },
        {
            id: "claude-3-7-sonnet",
            family: "sonnet",
            display_name: "Sonnet 3.7",
            provider_ids: {
                first_party: "claude-3-7-sonnet-20250219",
                bedrock: "us.anthropic.claude-3-7-sonnet-20250219-v1:0",
                vertex: "claude-3-7-sonnet@20250219",
                foundry: "claude-3-7-sonnet",
                anthropic_aws: "claude-3-7-sonnet-20250219",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-3-7-sonnet-20250219"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_3_7_SONNET",
            max_output_tokens: {
                default: 32000,
                upper: 64000
            },
            pricing: "tier_3_15",
            capabilities: []
        },
        {
            id: "claude-sonnet-4-0",
            family: "sonnet",
            display_name: "Sonnet 4",
            knowledge_cutoff: "January 2025",
            provider_ids: {
                first_party: "claude-sonnet-4-20250514",
                bedrock: "us.anthropic.claude-sonnet-4-20250514-v1:0",
                vertex: "claude-sonnet-4@20250514",
                foundry: "claude-sonnet-4",
                anthropic_aws: "claude-sonnet-4-20250514",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-sonnet-4-20250514"
            },
            eager_input_streaming: {
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_SONNET",
            context: {
                window: 200000,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 64000
            },
            pricing: "tier_3_15",
            capabilities: [
                "context_management"
            ]
        },
        {
            id: "claude-sonnet-4-5",
            family: "sonnet",
            display_name: "Sonnet 4.5",
            knowledge_cutoff: "January 2025",
            provider_ids: {
                first_party: "claude-sonnet-4-5-20250929",
                bedrock: "us.anthropic.claude-sonnet-4-5-20250929-v1:0",
                vertex: "claude-sonnet-4-5@20250929",
                foundry: "claude-sonnet-4-5",
                anthropic_aws: "claude-sonnet-4-5-20250929",
                anthropic_google_cloud: "claude-sonnet-4-5-20250929",
                mantle: null,
                gateway: "claude-sonnet-4-5-20250929"
            },
            eager_input_streaming: {
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_SONNET",
            fallback_3p: "claude-sonnet-4-0",
            context: {
                window: 200000,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 64000
            },
            pricing: "tier_3_15",
            capabilities: [
                "context_management"
            ]
        },
        {
            id: "claude-sonnet-4-6",
            family: "sonnet",
            display_name: "Sonnet 4.6",
            knowledge_cutoff: "August 2025",
            provider_ids: {
                first_party: "claude-sonnet-4-6",
                bedrock: "us.anthropic.claude-sonnet-4-6",
                vertex: "claude-sonnet-4-6",
                foundry: "claude-sonnet-4-6",
                anthropic_aws: "claude-sonnet-4-6",
                anthropic_google_cloud: "claude-sonnet-4-6",
                mantle: null,
                gateway: "claude-sonnet-4-6"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_SONNET",
            fallback_3p: "claude-sonnet-4-5",
            context: {
                window: 200000,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 128000
            },
            pricing: "tier_3_15",
            capabilities: [
                "effort",
                "max_effort",
                "adaptive_thinking",
                "context_management"
            ],
            advisor_rank: 2
        },
        {
            id: "claude-sonnet-5",
            family: "sonnet",
            display_name: "Sonnet 5",
            knowledge_cutoff: "January 2026",
            provider_ids: {
                first_party: "claude-sonnet-5",
                bedrock: "us.anthropic.claude-sonnet-5",
                vertex: "claude-sonnet-5",
                foundry: "claude-sonnet-5",
                anthropic_aws: "claude-sonnet-5",
                anthropic_google_cloud: "claude-sonnet-5",
                mantle: "anthropic.claude-sonnet-5",
                gateway: "claude-sonnet-5"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_SONNET",
            fallback_3p: "claude-sonnet-4-6",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_2_10",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "context_management"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.47,
                medium: 0.74,
                high: 1,
                xhigh: 2.41,
                max: 5.59
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 4
        },
        {
            id: "claude-sonnet-5-5",
            family: "sonnet",
            display_name: "Sonnet 5.5",
            knowledge_cutoff: "June 2026",
            provider_ids: {
                first_party: "claude-sonnet-5-5",
                bedrock: "us.anthropic.claude-sonnet-5-5",
                vertex: "claude-sonnet-5-5",
                foundry: "claude-sonnet-5-5",
                anthropic_aws: "claude-sonnet-5-5",
                anthropic_google_cloud: "claude-sonnet-5-5",
                mantle: "anthropic.claude-sonnet-5-5",
                gateway: "claude-sonnet-5-5"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_SONNET",
            fallback_3p: "claude-sonnet-5",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 128000,
                upper: 128000
            },
            pricing: "tier_2_10_cache_read_0_10",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "mid_conv_tool_change",
                "context_management",
                "rejects_disabled_thinking",
                "per_turn_effort",
                "per_turn_timing",
                "lean_prompt",
                "refusal_fallback",
                "silent_turn_reminder",
                "org_locked_thinking"
            ],
            default_effort: "medium",
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 6
        },
        {
            id: "claude-opus-4-0",
            family: "opus",
            display_name: "Opus 4",
            knowledge_cutoff: "January 2025",
            provider_ids: {
                first_party: "claude-opus-4-20250514",
                bedrock: "us.anthropic.claude-opus-4-20250514-v1:0",
                vertex: "claude-opus-4@20250514",
                foundry: "claude-opus-4",
                anthropic_aws: "claude-opus-4-20250514",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-opus-4-20250514"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_0_OPUS",
            context: {
                window: 200000,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 32000
            },
            pricing: "tier_15_75",
            capabilities: [
                "context_management"
            ]
        },
        {
            id: "claude-opus-4-1",
            family: "opus",
            display_name: "Opus 4.1",
            knowledge_cutoff: "January 2025",
            provider_ids: {
                first_party: "claude-opus-4-1-20250805",
                bedrock: "us.anthropic.claude-opus-4-1-20250805-v1:0",
                vertex: "claude-opus-4-1@20250805",
                foundry: "claude-opus-4-1",
                anthropic_aws: "claude-opus-4-1-20250805",
                anthropic_google_cloud: null,
                mantle: null,
                gateway: "claude-opus-4-1-20250805"
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_1_OPUS",
            context: {
                window: 200000,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 32000
            },
            pricing: "tier_15_75",
            capabilities: [
                "context_management"
            ]
        },
        {
            id: "claude-opus-4-5",
            family: "opus",
            display_name: "Opus 4.5",
            knowledge_cutoff: "May 2025",
            provider_ids: {
                first_party: "claude-opus-4-5-20251101",
                bedrock: "us.anthropic.claude-opus-4-5-20251101-v1:0",
                vertex: "claude-opus-4-5@20251101",
                foundry: "claude-opus-4-5",
                anthropic_aws: "claude-opus-4-5-20251101",
                anthropic_google_cloud: "claude-opus-4-5-20251101",
                mantle: null,
                gateway: "claude-opus-4-5-20251101"
            },
            eager_input_streaming: {
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_5_OPUS",
            fallback_3p: "claude-opus-4-1",
            context: {
                window: 200000,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 32000,
                upper: 64000
            },
            pricing: "tier_5_25",
            capabilities: [
                "context_management"
            ]
        },
        {
            id: "claude-opus-4-6",
            family: "opus",
            display_name: "Opus 4.6",
            knowledge_cutoff: "May 2025",
            provider_ids: {
                first_party: "claude-opus-4-6",
                bedrock: "us.anthropic.claude-opus-4-6-v1",
                vertex: "claude-opus-4-6",
                foundry: "claude-opus-4-6",
                anthropic_aws: "claude-opus-4-6",
                anthropic_google_cloud: "claude-opus-4-6",
                mantle: null,
                gateway: "claude-opus-4-6"
            },
            eager_input_streaming: {
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_6_OPUS",
            fallback_3p: "claude-opus-4-5",
            context: {
                window: 200000,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_5_25",
            capabilities: [
                "effort",
                "max_effort",
                "adaptive_thinking",
                "context_management"
            ],
            advisor_rank: 3
        },
        {
            id: "claude-opus-4-7",
            family: "opus",
            display_name: "Opus 4.7",
            knowledge_cutoff: "January 2026",
            provider_ids: {
                first_party: "claude-opus-4-7",
                bedrock: "us.anthropic.claude-opus-4-7",
                vertex: "claude-opus-4-7",
                foundry: "claude-opus-4-7",
                anthropic_aws: "claude-opus-4-7",
                anthropic_google_cloud: "claude-opus-4-7",
                mantle: "anthropic.claude-opus-4-7",
                gateway: "claude-opus-4-7"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_7_OPUS",
            fallback_3p: "claude-opus-4-6",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_5_25",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "context_management"
            ],
            default_effort: "xhigh",
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 5
        },
        {
            id: "claude-opus-4-8",
            family: "opus",
            display_name: "Opus 4.8",
            knowledge_cutoff: "January 2026",
            provider_ids: {
                first_party: "claude-opus-4-8",
                bedrock: "us.anthropic.claude-opus-4-8",
                vertex: "claude-opus-4-8",
                foundry: "claude-opus-4-8",
                anthropic_aws: "claude-opus-4-8",
                anthropic_google_cloud: "claude-opus-4-8",
                mantle: "anthropic.claude-opus-4-8",
                gateway: "claude-opus-4-8"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_4_8_OPUS",
            fallback_3p: "claude-opus-4-7",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_5_25",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "mid_conv_tool_change",
                "context_management",
                "fast_mode",
                "lean_prompt"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.72,
                medium: 0.9,
                high: 1,
                xhigh: 1.65,
                max: 1.88
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 5
        },
        {
            id: "claude-opus-5",
            family: "opus",
            display_name: "Opus 5",
            knowledge_cutoff: "May 2026",
            provider_ids: {
                first_party: "claude-opus-5",
                bedrock: "us.anthropic.claude-opus-5",
                vertex: "claude-opus-5",
                foundry: "claude-opus-5",
                anthropic_aws: "claude-opus-5",
                anthropic_google_cloud: "claude-opus-5",
                mantle: "anthropic.claude-opus-5",
                gateway: "claude-opus-5"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_OPUS",
            fallback_3p: "claude-opus-4-8",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_5_25",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "mid_conv_tool_change",
                "context_management",
                "thinking_disabled_effort_cap",
                "fast_mode",
                "lean_prompt",
                "refusal_fallback",
                "opus_5_prompt_bundle"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.67,
                medium: 0.76,
                high: 1,
                xhigh: 1.6,
                max: 1.7
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 7
        },
        {
            id: "claude-opus-5-5",
            family: "opus",
            display_name: "Opus 5.5",
            knowledge_cutoff: "June 2026",
            provider_ids: {
                first_party: "claude-opus-5-5",
                bedrock: "us.anthropic.claude-opus-5-5",
                vertex: "claude-opus-5-5",
                foundry: "claude-opus-5-5",
                anthropic_aws: "claude-opus-5-5",
                anthropic_google_cloud: "claude-opus-5-5",
                mantle: "anthropic.claude-opus-5-5",
                gateway: "claude-opus-5-5"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_5_5_OPUS",
            fallback_3p: "claude-opus-5",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true,
                supports_1m_suffix: true
            },
            max_output_tokens: {
                default: 128000,
                upper: 128000
            },
            pricing: "tier_4_20_cache_read_0_20",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "rejects_disabled_thinking",
                "mid_conv_tool_change",
                "per_turn_effort",
                "per_turn_timing",
                "context_management",
                "fast_mode",
                "lean_prompt",
                "refusal_fallback",
                "opus_5_5_prompt_bundle"
            ],
            default_effort: "medium",
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 7
        },
        {
            id: "claude-fable-5",
            family: "fable",
            display_name: "Fable 5",
            knowledge_cutoff: "January 2026",
            provider_ids: {
                first_party: "claude-fable-5",
                bedrock: "us.anthropic.claude-fable-5",
                vertex: "claude-fable-5",
                foundry: "claude-fable-5",
                anthropic_aws: "claude-fable-5",
                anthropic_google_cloud: "claude-fable-5",
                mantle: "anthropic.claude-fable-5",
                gateway: "claude-fable-5"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5",
            fallback_3p: "claude-opus-5-5",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_10_50",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "rejects_disabled_thinking",
                "mid_conv_tool_change",
                "context_management",
                "lean_prompt",
                "fable_5_mitigations",
                "refusal_fallback"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.6,
                medium: 0.77,
                high: 1,
                xhigh: 1.74,
                max: 1.91
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 8
        },
        {
            id: "claude-fable-5-1",
            family: "fable",
            display_name: "Fable 5.1",
            knowledge_cutoff: "June 2026",
            provider_ids: {
                first_party: "claude-fable-5-1",
                bedrock: "us.anthropic.claude-fable-5-1",
                vertex: "claude-fable-5-1",
                foundry: "claude-fable-5-1",
                anthropic_aws: "claude-fable-5-1",
                anthropic_google_cloud: "claude-fable-5-1",
                mantle: "anthropic.claude-fable-5-1",
                gateway: "claude-fable-5-1"
            },
            eager_input_streaming: {
                bedrock: true,
                vertex: true
            },
            vertex_region_env_var: "VERTEX_REGION_CLAUDE_FABLE_5_1",
            fallback_3p: "claude-fable-5",
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_10_50_cache_read_0_25",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "rejects_disabled_thinking",
                "mid_conv_tool_change",
                "per_turn_effort",
                "per_turn_timing",
                "context_management",
                "lean_prompt",
                "fable_5_mitigations",
                "refusal_fallback",
                "fable_5_1_prompt_bundle"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.75,
                medium: 0.86,
                high: 1,
                xhigh: 1.38,
                max: 1.74
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 9
        },
        {
            id: "claude-mythos-5",
            family: "mythos",
            display_name: "Mythos 5",
            knowledge_cutoff: "January 2026",
            provider_ids: {
                first_party: "claude-mythos-5",
                bedrock: null,
                vertex: null,
                foundry: null,
                anthropic_aws: null,
                anthropic_google_cloud: null,
                mantle: null,
                gateway: null
            },
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_10_50",
            capabilities: [],
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 8
        },
        {
            id: "claude-mythos-5-1",
            family: "mythos",
            display_name: "Mythos 5.1",
            knowledge_cutoff: "June 2026",
            provider_ids: {
                first_party: "claude-mythos-5-1",
                bedrock: null,
                vertex: null,
                foundry: null,
                anthropic_aws: null,
                anthropic_google_cloud: null,
                mantle: null,
                gateway: null
            },
            context: {
                window: 1000000,
                native_1m: true,
                supports_1m_beta: true
            },
            max_output_tokens: {
                default: 64000,
                upper: 128000
            },
            pricing: "tier_10_50_cache_read_0_25",
            capabilities: [
                "effort",
                "max_effort",
                "xhigh_effort",
                "adaptive_thinking",
                "rejects_disabled_thinking",
                "mid_conv_tool_change",
                "per_turn_timing",
                "context_management",
                "lean_prompt",
                "fable_5_mitigations",
                "fable_5_1_prompt_bundle"
            ],
            default_effort: "high",
            effort_cost_index: {
                low: 0.75,
                medium: 0.86,
                high: 1,
                xhigh: 1.38,
                max: 1.74
            },
            image_limits: {
                maxWidth: 2000,
                maxHeight: 2000
            },
            advisor_rank: 9
        }
    ],
    aliases: {
        opus: {
            default: "claude-opus-5-5",
            per_provider: {
                bedrock: "claude-opus-5-5",
                vertex: "claude-opus-5-5",
                foundry: "claude-opus-4-6",
                mantle: "claude-opus-5-5",
                anthropic_aws: "claude-opus-5-5",
                gateway: "claude-opus-4-7"
            }
        },
        sonnet: {
            default: "claude-sonnet-5-5",
            per_provider: {
                bedrock: "claude-sonnet-4-5",
                vertex: "claude-sonnet-4-5",
                foundry: "claude-sonnet-4-5",
                mantle: "claude-sonnet-4-5",
                anthropic_aws: "claude-sonnet-4-6",
                gateway: "claude-sonnet-4-6"
            }
        },
        haiku: {
            default: "claude-haiku-5-5",
            per_provider: {
                bedrock: "claude-haiku-4-5",
                vertex: "claude-haiku-4-5",
                foundry: "claude-haiku-4-5",
                mantle: "claude-haiku-4-5",
                anthropic_aws: "claude-haiku-4-5",
                anthropic_google_cloud: "claude-haiku-4-5",
                gateway: "claude-haiku-4-5"
            }
        },
        fable: {
            default: "claude-fable-5-1",
            per_provider: {
                gateway: "claude-fable-5"
            }
        }
    },
    defaults: {},
    best: "fable",
    latest_per_family: {
        fable: "claude-fable-5-1",
        opus: "claude-opus-5-5",
        sonnet: "claude-sonnet-5-5",
        haiku: "claude-haiku-5-5"
    },
    alias_migration: {}
};
function O() {
    return {
        bakedCatalog: undefined,
        canonicalNameMemo: new Map,
        mainLoopCanonical: undefined,
        servedCapabilityLookup: undefined,
        featureGateLookup: undefined,
        modelKnowledge: undefined
    };
}
let f;
function NF() {
    if (f === undefined) {
        f = O();
    }
    return f;
}
const P = p(()=>u({
        first_party: o(),
        bedrock: o().nullish(),
        vertex: o().nullish(),
        foundry: o().nullish(),
        anthropic_aws: o().nullish(),
        anthropic_google_cloud: o().nullish(),
        mantle: o().nullish(),
        gateway: o().nullish()
    }).loose());
const b = p(()=>u({
        input: E(),
        output: E(),
        cache_write_5m: E().optional(),
        cache_write_1h: E().optional(),
        cache_read: E().optional(),
        web_search: E().optional(),
        long_prompt: u({
            above_prompt_tokens: E().int().positive(),
            input: E(),
            output: E(),
            cache_write_5m: E().optional(),
            cache_write_1h: E().optional(),
            cache_read: E().optional()
        }).loose().optional()
    }).loose());
const S = p(()=>u({
        id: o(),
        family: o(),
        display_name: o(),
        slogan: o().optional(),
        knowledge_cutoff: o().optional(),
        provider_ids: P(),
        eager_input_streaming: u({
            bedrock: A(true).optional(),
            vertex: A(true).optional()
        }).loose().optional(),
        vertex_region_env_var: o().optional(),
        fallback_3p: o().optional(),
        context: u({
            window: E(),
            native_1m: M().optional(),
            supports_1m_beta: M().optional(),
            supports_1m_suffix: M().optional()
        }).loose().optional(),
        max_output_tokens: u({
            default: E(),
            upper: E()
        }).loose().optional(),
        pricing: Ue([
            o(),
            b()
        ]).optional(),
        capabilities: T(o()).default([]),
        default_effort: U([
            "low",
            "medium",
            "high",
            "xhigh",
            "max"
        ]).optional(),
        effort_cost_index: u({
            low: E().positive().optional(),
            medium: E().positive().optional(),
            high: E().positive().optional(),
            xhigh: E().positive().optional(),
            max: E().positive().optional()
        }).loose().optional(),
        image_limits: u({
            maxWidth: E().optional(),
            maxHeight: E().optional(),
            maxBase64Size: E().optional()
        }).loose().optional(),
        advisor_rank: E().optional(),
        fallback_chain: T(o()).optional(),
        picker: u({
            section: U([
                "main",
                "overflow",
                "deprecated"
            ]).optional(),
            badge: o().optional(),
            disabled_reason: o().optional(),
            tiers: T(o()).optional()
        }).loose().optional(),
        deprecation: u({
            retirement_dates: ue(o(), o()).optional(),
            remapped_to: o().optional()
        }).loose().optional(),
        min_cli_version: o().optional()
    }).loose());
const R = p(()=>u({
        default: o(),
        per_provider: ue(o(), o()).optional()
    }).loose());
const oe = p(()=>u({
        schema_version: E(),
        pricing_tiers: ue(o(), b()).default({}),
        models: T(S()),
        aliases: ue(o(), R()).default({}),
        defaults: ue(o(), o()).default({}),
        best: o().optional(),
        latest_per_family: ue(o(), o()).default({}),
        alias_migration: ue(o(), o()).default({})
    }).loose());
function I(catalog) {
    let entriesById = new Map;
    let catalogIdByProviderId = new Map;
    for (let n of catalog.models){
        entriesById.set(n.id, n);
        for (let i of Object.values(n.provider_ids)){
            if (typeof i !== "string") {
                continue;
            }
            let _ = i.toLowerCase();
            let l = catalogIdByProviderId.get(_);
            if (l !== undefined && l !== n.id) {
                throw Error("model catalog: provider id collision across distinct entries");
            }
            catalogIdByProviderId.set(_, n.id);
        }
    }
    return {
        catalog,
        entriesById,
        catalogIdByProviderId
    };
}
function g() {
    let e = NF();
    if (e.bakedCatalog === undefined) {
        e.bakedCatalog = I(UTr);
    }
    return e.bakedCatalog;
}
function Exe() {
    return g().catalog;
}
const tq = Exe;
function zue(e) {
    return g().catalogIdByProviderId.get(e.toLowerCase());
}
function il(e) {
    return g().entriesById.get(e);
}
function Dvo({ pricing }) {
    if (typeof pricing !== "string") {
        return pricing;
    }
    let pricing_tiers = tq().pricing_tiers;
    if (Object.hasOwn(pricing_tiers, pricing)) {
        return pricing_tiers[pricing];
    }
}
const Lvo = [
    "effort",
    "max_effort",
    "xhigh_effort",
    "adaptive_thinking",
    "rejects_disabled_thinking",
    "thinking_disabled_effort_cap",
    "mid_conv_system",
    "mid_conv_tool_change",
    "per_turn_effort",
    "per_turn_timing",
    "context_management",
    "fast_mode",
    "lean_prompt",
    "fable_5_mitigations",
    "refusal_fallback",
    "opus_5_prompt_bundle",
    "fable_5_1_prompt_bundle",
    "opus_5_5_prompt_bundle",
    "thrifty_sonic",
    "turn_updates",
    "bash_output_audience_note",
    "silent_turn_reminder",
    "thinking_display_updates",
    "quizzical_shore",
    "lucky_cerf",
    "amber_astrolabe",
    "bison_cairn",
    "larch_cistern",
    "haiku_5_5_early_stopping_guidance",
    "org_locked_thinking",
    "elapsed_time_reminder"
];
function qRs(e) {
    NF().servedCapabilityLookup = e;
}
const L = {
    per_turn_effort: "tengu_per_turn_effort"
};
function KRs(e) {
    NF().featureGateLookup = e;
}
function D(e) {
    let t = L[e];
    if (t === undefined) {
        return true;
    }
    return NF().featureGateLookup?.(t) === true;
}
function w_(e, t, r) {
    return jdt(t, e) ?? ztn(e, t, r);
}
function ztn(e, t, r) {
    if (NF().servedCapabilityLookup?.(t, [
        r,
        m(e)
    ]) === true && D(t)) {
        return true;
    }
    if (Nvo(e, t)) {
        return true;
    }
}
function Nvo(e, t) {
    return il(m(e))?.capabilities.includes(t);
}
function jdt(e, t) {
    return $vo(t).get(e);
}
function $vo(e) {
    let t = new Map;
    let a_CLAUDE_CODE_MODEL_CAPABILITIES = a.CLAUDE_CODE_MODEL_CAPABILITIES;
    if (a_CLAUDE_CODE_MODEL_CAPABILITIES === undefined) {
        return t;
    }
    let n = m(e);
    for (let i of a_CLAUDE_CODE_MODEL_CAPABILITIES.split(";")){
        let _ = i.indexOf("=");
        if (_ !== -1) {
            let l = i.slice(0, _).trim();
            if (l === "") {
                continue;
            }
            if (!(l.endsWith("*") ? n.startsWith(l.slice(0, -1)) : n === l)) {
                continue;
            }
        }
        for (let l of (_ === -1 ? i : i.slice(_ + 1)).split(",")){
            let c = l.trim();
            let v = !c.startsWith("-");
            t.set(v ? c : c.slice(1), v);
        }
    }
    return t;
}
function m(e) {
    return e.replace(/\[1m\]/gi, "");
}
function U3e(e, t) {
    let aliases = tq().aliases;
    let n = Object.hasOwn(aliases, e) ? aliases[e] : undefined;
    if (!n) {
        return;
    }
    let n_per_provider = n.per_provider;
    return (n_per_provider && Object.hasOwn(n_per_provider, t) ? n_per_provider[t] : undefined) ?? n.default;
}
function YRs(e) {
    let t = U3e(e, "first_party");
    let r = t === undefined ? undefined : il(t);
    if (r === undefined) {
        throw Error("model-catalog.json: every aliases entry must name a models[] entry");
    }
    return r.provider_ids.first_party;
}
const N = {
    "claude-3-5-haiku": "haiku35",
    "claude-haiku-4-5": "haiku45",
    "claude-haiku-5-5": "haiku55",
    "claude-3-5-sonnet": "sonnet35",
    "claude-3-7-sonnet": "sonnet37",
    "claude-sonnet-4-0": "sonnet40",
    "claude-sonnet-4-5": "sonnet45",
    "claude-sonnet-4-6": "sonnet46",
    "claude-sonnet-5": "sonnet5",
    "claude-sonnet-5-5": "sonnet55",
    "claude-opus-4-0": "opus40",
    "claude-opus-4-1": "opus41",
    "claude-opus-4-5": "opus45",
    "claude-opus-4-6": "opus46",
    "claude-opus-4-7": "opus47",
    "claude-opus-4-8": "opus48",
    "claude-opus-5": "opus5",
    "claude-opus-5-5": "opus55",
    "claude-fable-5": "fable5",
    "claude-fable-5-1": "fable51"
};
function z(e) {
    let e_provider_ids = e.provider_ids;
    let r = {
        firstParty: e_provider_ids.first_party,
        bedrock: e_provider_ids.bedrock ?? null,
        vertex: e_provider_ids.vertex ?? null,
        foundry: e_provider_ids.foundry ?? null,
        anthropicAws: e_provider_ids.anthropic_aws ?? null,
        anthropicGoogleCloud: e_provider_ids.anthropic_google_cloud ?? null,
        mantle: e_provider_ids.mantle ?? null,
        gateway: e_provider_ids.gateway ?? e_provider_ids.first_party
    };
    if (e.eager_input_streaming) {
        r.eagerInputStreaming = e.eager_input_streaming;
    }
    return r;
}
function G() {
    let e = {};
    for (let [t, r] of Object.entries(N)){
        let n = il(t);
        if (!n) {
            throw new x(`model catalog missing entry for '${t}' (CATALOG_ID_TO_KEY key '${r}')`, "model catalog missing entry for CATALOG_ID_TO_KEY id");
        }
        e[r] = z(n);
    }
    return e;
}
const Ho = G();
function s(e) {
    for (let t of [
        "bedrock",
        "vertex",
        "foundry",
        "anthropicAws"
    ]){
        if (e[t] === null) {
            throw new x(`named CLAUDE_*_CONFIG export for '${e.firstParty}' has null ${t}`, "named model config export has null 3P provider id");
        }
    }
    return e;
}
const ie = s(Ho.haiku35);
const se = s(Ho.haiku45);
const le = s(Ho.sonnet35);
const de = s(Ho.sonnet37);
const _e = s(Ho.sonnet40);
const pe = s(Ho.sonnet45);
const ce = s(Ho.sonnet46);
const fe = s(Ho.sonnet5);
const ge = s(Ho.opus40);
const me = s(Ho.opus41);
const he = s(Ho.opus45);
const ye = s(Ho.opus46);
const ve = s(Ho.opus47);
const be = s(Ho.opus48);
const xe = s(Ho.opus5);
const Ee = s(Ho.opus55);
const Wdt = s(Ho.fable5);
const IWn = s(Ho.fable51);
const XRs = {
    firstParty: "claude-mythos-5",
    bedrock: "us.anthropic.claude-mythos-5",
    vertex: "claude-mythos-5",
    foundry: "claude-mythos-5",
    anthropicAws: "claude-mythos-5",
    anthropicGoogleCloud: "claude-mythos-5",
    mantle: "anthropic.claude-mythos-5",
    gateway: "claude-mythos-5",
    eagerInputStreaming: {
        bedrock: true,
        vertex: true
    }
};
const Gtn = [
    "opus55",
    "opus5",
    "opus48",
    "opus47",
    "opus46",
    "opus45"
];
const JRs = Object.values(Ho).map((e)=>e.firstParty);
const Rz = Object.fromEntries(Object.entries(Ho).map(([e, t])=>[
        t.firstParty,
        e
    ]));
function SO(e) {
    let t = e.toLowerCase();
    for (let r of Object.values(Ho)){
        for (let n of Object.values(r)){
            if (typeof n === "string" && n.toLowerCase() === t) {
                return r;
            }
        }
    }
    return null;
}
const $Mt = 600000;
function Fvo() {
    let overturnedEntitlementDenies = Dr().providerCache.overturnedEntitlementDenies;
    let t = Date.now();
    for (let [r, n] of overturnedEntitlementDenies){
        if (t - n >= $Mt) {
            overturnedEntitlementDenies.delete(r);
        }
    }
}
function Uvo() {
    return {
        validatedModels: new Set,
        confirmedEntitlementDenies: new Map,
        overturnedEntitlementDenies: new Map,
        bedrockInferenceProfiles: undefined,
        inferenceProfileBackingModels: new Map,
        modelConfigs: new Map,
        clientDataFetches: new Map,
        capabilityOverrides: new Map,
        probeResults: new Map,
        preconnectFired: false
    };
}
function OWn() {
    return {
        allModelBetas: new Map,
        modelBetas: new Map,
        bedrockExtraBodyParamsBetas: new Map,
        midConversationSystem: new Map
    };
}
function QRs(e) {
    let { betas, betasCompiledOnly } = Dr();
    for (let n of [
        ...Object.values(betas),
        ...Object.values(betasCompiledOnly)
    ]){
        for (let i of [
            ...n.keys()
        ]){
            if (e(i)) {
                n.delete(i);
            }
        }
    }
}
function F() {
    return {
        providerCache: Uvo(),
        fetchesClientData: false,
        sessionModelDenyReprobe: {
            reprobe: undefined,
            honoredModels: new Set,
            contestedDenies: new Map,
            refusedModels: new Set,
            generation: 0,
            restricted: Oe()
        },
        betas: OWn(),
        betasCompiledOnly: OWn(),
        usageCreditsOnlyModelFlags: {
            fableBilling: null,
            creditsOnlyTiers: null
        },
        warnedEnforcementMessages: new Set,
        resolvingBestModel: false,
        modelCapabilitiesByCachePath: new Map,
        gatewayModelsByCachePath: new Map,
        modelCapabilitiesStorageV5: undefined,
        gatewayModelsStorageV5: undefined,
        servedCatalogByKey: new Map,
        servedCatalogRefreshes: new Map,
        servedCatalogSettledRefreshes: new WeakSet,
        servedCatalogRefusal: undefined,
        servedCatalogPostLoginRun: undefined,
        publishedCatalogByKey: new Map,
        publishedCatalogRefreshes: new Map,
        publishedCatalogFloorMarks: new Map,
        publishedCatalogFloorRead: undefined,
        publishedCatalogFloorWrite: undefined,
        clientDataUrl: {
            pending: undefined,
            document: undefined,
            assumesFirstPartyBaseUrl: false
        },
        servedCatalogShadowStarted: false,
        servedCatalogActive: undefined,
        servedCatalogMaskedIds: new Set,
        servedCatalogMasksEveryId: false,
        servedCatalogPublicIds: new Map,
        servedCatalogMaskHydrated: false,
        servedCatalogMaskHydration: undefined,
        servedCatalogMaskRetryAt: 0,
        servedCatalogPersistedMaskedIds: undefined,
        servedCatalogMaskWrite: undefined,
        servedCatalogSuppressDepth: 0,
        servedCatalogDeactivatedRows: undefined,
        familySpellingVerdicts: new Map,
        behavesAsMemo: undefined,
        unservedModelDrop: undefined,
        servedCatalogOffBeforeAsking: undefined,
        catalogDecision: undefined
    };
}
const H = new lt(()=>F());
function Dr() {
    return H.of(B());
}
const Lw = {
    bedrock: "Amazon Bedrock",
    vertex: "Google Vertex AI",
    foundry: "Microsoft Foundry",
    anthropicAws: "Claude Platform on AWS",
    anthropicGoogleCloud: "Claude Platform on Google Cloud",
    mantle: "Amazon Bedrock (Mantle)",
    gateway: "Cloud gateway"
};
const B3e = {
    bedrock: "CLAUDE_CODE_USE_BEDROCK",
    foundry: "CLAUDE_CODE_USE_FOUNDRY",
    anthropicAws: "CLAUDE_CODE_USE_ANTHROPIC_AWS",
    anthropicGoogleCloud: "CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD",
    mantle: "CLAUDE_CODE_USE_MANTLE",
    vertex: "CLAUDE_CODE_USE_VERTEX"
};
function BTr(e) {
    switch(e){
        case "firstParty":
            return "anthropic";
        case "bedrock":
            return "bedrock";
        case "vertex":
            return "vertex";
        case "foundry":
            return "foundry";
        case "anthropicAws":
            return "anthropicAws";
        case "anthropicGoogleCloud":
            return "anthropicGoogleCloud";
        case "mantle":
            return "mantle";
        case "gateway":
            return "gateway";
    }
}
function j(e) {
    return e in Lw;
}
function Vtn(e) {
    switch(e){
        case "anthropic":
            return "Anthropic API";
        case "customEndpoint":
            return "a custom endpoint (LLM gateway or proxy)";
        default:
            if (j(e)) {
                return Lw[e];
            }
            return e;
    }
}
function Ie() {
    if (eo() || ysn() || _sn()) {
        return "gateway";
    }
    if (a.CLAUDE_CODE_USE_BEDROCK) {
        return "bedrock";
    }
    if (a.CLAUDE_CODE_USE_FOUNDRY) {
        return "foundry";
    }
    if (a.CLAUDE_CODE_USE_ANTHROPIC_AWS) {
        return "anthropicAws";
    }
    if (a.CLAUDE_CODE_USE_ANTHROPIC_GOOGLE_CLOUD) {
        return "anthropicGoogleCloud";
    }
    if (a.CLAUDE_CODE_USE_MANTLE) {
        return "mantle";
    }
    if (a.CLAUDE_CODE_USE_VERTEX) {
        return "vertex";
    }
    return "firstParty";
}
function MWn() {
    return Ie() !== "firstParty";
}
function YT() {
    return d(Ie());
}
function qn() {
    return Ie() === "firstParty";
}
function kxe() {
    if (Ie() === "bedrock" && a.CLAUDE_CODE_USE_MANTLE) {
        return "mantle";
    }
    return null;
}
function K(e) {
    return e.startsWith("anthropic.") && !ZRs(Ht(e));
}
function vc(e) {
    if (e) {
        let t = kxe();
        if (t) {
            if (t === "mantle" && K(e)) {
                return t;
            }
            let r = Ie();
            let n = SO(e);
            if (n && n[r] === null && n[t] !== null) {
                return t;
            }
        }
    }
    return Ie();
}
function qd(e = Ie()) {
    return e === "firstParty" || k1(e) || e === "gateway";
}
function k1(e = Ie()) {
    return e === "anthropicAws" || e === "anthropicGoogleCloud";
}
function HWn() {
    return qn();
}
function xz(e = Ie()) {
    return e === "firstParty" || k1(e) || e === "foundry" || e === "mantle";
}
function Ta() {
    return Ie() === "firstParty" && vi();
}
function qtn() {
    let e = Ie();
    return e === "firstParty" || e === "anthropicAws" && a.ANTHROPIC_AWS_BASE_URL === undefined;
}
function vi() {
    if (dse()) {
        return true;
    }
    return af();
}
function dse() {
    return a._CLAUDE_CODE_ASSUME_FIRST_PARTY_BASE_URL ?? Dr().clientDataUrl.assumesFirstPartyBaseUrl;
}
function af() {
    let ANTHROPIC_BASE_URL = process.env.ANTHROPIC_BASE_URL;
    if (!ANTHROPIC_BASE_URL) {
        return true;
    }
    return Rh(ANTHROPIC_BASE_URL);
}
function Ktn() {
    if (Ce()) {
        return undefined;
    }
    return !af();
}
function Ytn() {
    let a_ANTHROPIC_BASE_URL = a.ANTHROPIC_BASE_URL;
    if (Ce() || Ie() !== "firstParty" || !a_ANTHROPIC_BASE_URL || a.ANTHROPIC_UNIX_SOCKET !== undefined || Rh(a_ANTHROPIC_BASE_URL)) {
        return;
    }
    try {
        return new URL(a_ANTHROPIC_BASE_URL).host || undefined;
    } catch  {
        return;
    }
}
function Rh(e) {
    try {
        let t = new URL(e).host;
        return [
            "api.anthropic.com"
        ].includes(t);
    } catch  {
        return false;
    }
}
const W = "[a-z]{2,4}(?:-[a-z]{2,5})?-[a-z]+-\\d+";
const h = "[a-z]+(?:-[a-z]+\\d+)?";
const X = "(?:amazonaws\\.(?:com(?:\\.cn)?|eu)|api\\.aws|c2s\\.ic\\.gov|sc2s\\.sgov\\.gov|cloud\\.adc-e\\.uk|csp\\.hci\\.ic\\.gov)";
function y(e) {
    return new RegExp(`^(?:vpce-[a-z0-9-]+\\.)?${e}(?:-fips)?\\.${W}\\.(?:vpce\\.)?${X}$`);
}
const C = {
    firstParty: undefined,
    gateway: undefined,
    bedrock: {
        variables: [
            {
                name: "ANTHROPIC_BEDROCK_BASE_URL"
            },
            {
                name: "AWS_ENDPOINT_URL_BEDROCK_RUNTIME"
            },
            {
                name: "AWS_ENDPOINT_URL_BEDROCK"
            },
            {
                name: "AWS_ENDPOINT_URL"
            }
        ],
        ownHost: y("bedrock(?:-runtime)?")
    },
    mantle: {
        variables: [
            {
                name: "ANTHROPIC_BEDROCK_MANTLE_BASE_URL"
            }
        ],
        ownHost: y("bedrock-mantle")
    },
    anthropicAws: {
        variables: [
            {
                name: "ANTHROPIC_AWS_BASE_URL"
            }
        ],
        ownHost: y("aws-external-anthropic")
    },
    vertex: {
        variables: [
            {
                name: "ANTHROPIC_VERTEX_BASE_URL"
            }
        ],
        ownHost: new RegExp(`^(?:aiplatform|${h}-aiplatform|aiplatform\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`)
    },
    anthropicGoogleCloud: {
        variables: [
            {
                name: "ANTHROPIC_GOOGLE_CLOUD_BASE_URL"
            }
        ],
        ownHost: new RegExp(`^(?:claude|claude\\.${h}\\.rep|[a-z0-9-]+\\.p)\\.googleapis\\.com$`)
    },
    foundry: {
        variables: [
            {
                name: "ANTHROPIC_FOUNDRY_BASE_URL"
            },
            {
                name: "ANTHROPIC_FOUNDRY_RESOURCE",
                urlOf: (e)=>`https://${e}.services.ai.azure.com`
            }
        ],
        ownHost: /^[a-z0-9-]{2,64}\.(?:services\.ai|cognitiveservices|openai)\.azure\.(?:com|us|cn)$/
    }
};
function jTr(e) {
    return C[e]?.variables ?? [];
}
function WTr(e, t) {
    let r = [];
    for (let { name, urlOf } of jTr(e)){
        let _ = t(name);
        if (!_) {
            continue;
        }
        let url = urlOf === undefined ? _ : urlOf(_);
        let verdict = k(e, url);
        if (verdict !== "own") {
            r.push({
                variable: name,
                url,
                verdict
            });
        }
    }
    return r;
}
function k(e, t) {
    let r = C[e];
    let n;
    try {
        n = new URL(t);
    } catch  {
        return "unparsable";
    }
    let i = n.hostname.toLowerCase().replace(/\.$/, "");
    if (r === undefined || !r.ownHost.test(i)) {
        return "foreign";
    }
    if (n.protocol === "https:") {
        return "own";
    }
    return "insecure";
}
function Bvo(e, t) {
    return k(e, t) === "own";
}
function j3e() {
    return vi() || a.CLAUDE_CODE_PROPAGATE_TRACEPARENT;
}
export { UTr, NF, Exe, tq, zue, il, Dvo, Lvo, qRs, KRs, w_, ztn, Nvo, jdt, $vo, U3e, YRs, Ho, Wdt, IWn, XRs, Gtn, JRs, Rz, SO, $Mt, Fvo, Uvo, OWn, QRs, Dr, Lw, B3e, BTr, Vtn, Ie, MWn, YT, qn, kxe, vc, qd, k1, HWn, xz, Ta, qtn, vi, dse, af, Ktn, Ytn, Rh, jTr, WTr, Bvo, j3e };
