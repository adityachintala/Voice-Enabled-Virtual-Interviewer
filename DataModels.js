const mongoose = require('mongoose');

const Data = mongoose.Schema(
    {
        "topic": {
            "type": "String"
        },
        "questions": {
            "question1": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question2": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question3": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question4": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question5": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question6": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question7": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question8": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question9": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            },
            "question10": {
                "question": {
                    "type": "String"
                },
                "variation1": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation2": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                },
                "variation3": {
                    "question": {
                        "type": "String"
                    },
                    "answer": {
                        "type": "String"
                    }
                }
            }
        }
    }
);

module.exports = mongoose.model('Data', Data, 'Data');