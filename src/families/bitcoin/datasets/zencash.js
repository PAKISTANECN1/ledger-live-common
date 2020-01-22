// @flow
import type { CurrenciesData } from "../../../__tests__/test-helpers/bridge";
import type { Transaction } from "../types";

const dataset: CurrenciesData<Transaction> = {
  scanAccounts: [
    {
      name: "zencash seed 1",
      apdus: `
      => e040000009028000002c80000079
      <= 41042e498105f6019af505b255e11dcaf7b02e9ce3150eb7be8c962c50e2f99ee6cf1ae9b7abd5ebc526ab8eb523925ce6637460a36277915ad849f838436d89ef74237a6e57426b776836736a52774274744c6142503663616a543258667933737959446e4a4bf44eb7c7e37ffab644c94124661a77c07466a81bcfb7d989ae09f41c4f81f59000
      => e016000000
      <= 208920960407486f72697a656e035a454e9000
      => e040000009028000002c80000079
      <= 41042e498105f6019af505b255e11dcaf7b02e9ce3150eb7be8c962c50e2f99ee6cf1ae9b7abd5ebc526ab8eb523925ce6637460a36277915ad849f838436d89ef74237a6e57426b776836736a52774274744c6142503663616a543258667933737959446e4a4bf44eb7c7e37ffab644c94124661a77c07466a81bcfb7d989ae09f41c4f81f59000
      => e04000000d038000002c8000007980000000
      <= 4104e0ece9b023d05def28f923108d4e380e925f3b77622d09b5ec8a48f55c2165dde884c73ba3dd837fb37f1481626d3500e773a809b09d5c0a44743d14e9afafc3237a6e69514a634e736e4e4e6276785a6179797261436376616b6d594652726134704a59d53fa7b0d7126a57f2ecc3b4febadfcb869d966a66306614fe94ff44a1e54e7d9000
      => e04000000d038000002c8000007980000001
      <= 410440fcf41dee2df61bb7b87a8f584bc06d2ed3edb19c025f7d1f05756e84cd72c7771042b43f9ddbaeee128b3536d64b3633cf103fac36137cecc944ec63715b81237a6e61464a50647a4b4b34743932735462386b6a4e56324e5a5334486d673543354e729a164c5d7d5b90f0775b3500564abeada1e40c3af2b12f40250f813153d123139000
      => e04000000d038000002c8000007980000002
      <= 4104418ceb9381d95d278abefa8f27b7e4a838666700a972d0b8c02adf80cd5ba25a1d20f25cf568f5e4ee2f9ba65756387079e52965964cea1231178bba589e4f02237a6e573279423669716532566d54563136693837567547475377546877733564636933018ea2f30c57bbced4e719bd1c9dbb6bbb212fe74871afc45a8828603baff5149000
      => e04000000d038000002c8000007980000003
      <= 41046519afa0b0538895afa599a5a800bf4f408cbdbdc51a4b5cb6199f27917912a744ad090ec995f706ebc06907e4872fd3c732bf05f9934b3ea102fb6fcd007a6a237a6e627444446336757973484a744559336f46596d70546266664e746d4c7765616d4e7ae33429e9696a63e430fb00ef24acd9c5596096498d3ce438f71961c8e08bfa9000
      `
    }
  ]
};

export default dataset;